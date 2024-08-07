import { Controller, Post, Delete, Body, Param, Get, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { User } from '../user/user.entity';
import { Cart } from './cart.entity';
import { CreateCartDto } from './dtos/CreateCart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('create')
  async createCart(@Body() user: User): Promise<Cart> {
    return this.cartService.createCart(user);
  }
  @Post()
  getCart(@Body() user: User) {
    console.log(user);
    return this.cartService.getCart(user);
  }

  @Post('add/:productId')
  async addItemToCart(
    @Param('productId') productId: number,
    @Body() createCartDto: CreateCartDto
  ) {
    const { user, quantity } = createCartDto;
    return this.cartService.addItemToCart(user, productId, quantity);
  }

  @Delete('remove/:productId')
  removeItemFromCart(@Body() user: User, @Param('productId') productId: number) {
    return this.cartService.removeItemFromCart(user, productId);
  }

  @Delete('clear')
  clearCart(@Body() user: User) {
    return this.cartService.clearCart(user);
  }
}
