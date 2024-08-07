// src/cart/cart.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';
import { CartItem } from './cartitem.entity';
import { User } from '../user/user.entity';
import { Product } from '../shop/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>
  ) {}

  async addToCart(user: User, product: Product, quantity: number): Promise<Cart> {
    let cart = await this.cartRepository.findOne({ where: { user }, relations: ['items', 'items.product'] });

    if (!cart) {
      cart = new Cart();
      cart.user = user;
      cart.items = [];
    }

    let cartItem = cart.items.find(item => item.product.id === product.id);

    if (cartItem) {
      cartItem.quantity += quantity;
      cartItem.totalPrice = cartItem.quantity * product.price;
    } else {
      cartItem = new CartItem();
      cartItem.cart = cart;
      cartItem.product = product;
      cartItem.quantity = quantity;
      cartItem.totalPrice = product.price * quantity;
      cart.items.push(cartItem);
    }

    await this.cartItemRepository.save(cartItem);
    return this.cartRepository.save(cart);
  }

  async findCartByUser(user: User): Promise<Cart> {
    return this.cartRepository.findOne({ where: { user }, relations: ['items', 'items.product'] });
  }

  async removeCartItem(user: User, productId: number): Promise<void> {
    const cart = await this.cartRepository.findOne({ where: { user }, relations: ['items'] });
    if (cart) {
      cart.items = cart.items.filter(item => item.product.id !== productId);
      await this.cartRepository.save(cart);
    }
  }
}
