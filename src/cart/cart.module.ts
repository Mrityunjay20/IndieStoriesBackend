// src/cart/cart.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { CartItem } from './cartitem.entity';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { User } from '../user/user.entity';
import { Product } from '../shop/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem, User, Product])],
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
