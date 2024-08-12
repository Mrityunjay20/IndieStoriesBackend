import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderItem } from './order-item.entity';
import { User } from 'src/user/user.entity';
import { Product } from 'src/shop/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem,User, Product])],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports:[OrdersService, Order, OrderItem]

})
export class OrdersModule {}
