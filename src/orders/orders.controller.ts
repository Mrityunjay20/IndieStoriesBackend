import { Body, Controller, Post } from '@nestjs/common';
import { OrderDto } from './dtos/CreateOrder.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly OrderRepository: OrdersService){}

    @Post('createorder')
    async createOrder(@Body() order: OrderDto){
        return await this.OrderRepository.createOrder(order.firebaseUid, order.items, order.OrderInfo);
    }

}
