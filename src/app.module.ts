import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './shop/entities/product.entity';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Cart } from './cart/cart.entity';
import { CartItem } from './cart/cart-Item.entity';
import { OrdersModule } from './orders/orders.module';
import { CustomerOrders } from './orders/Order.entity';
import { OrderItem } from './orders/OrderItem.entity';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ShopModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER || 'your_postgres_user',
    password: process.env.DB_PASSWORD || 'your_postgres_password',
    database: process.env.DB_NAME || 'your_postgres_db',
    entities: [Product, User, Cart, CartItem, CustomerOrders, OrderItem],
    synchronize: false,  // Set to false in production
    logging: true,      //only to use in development enviornment NEVER IN production
  }), CartModule, UserModule, AdminModule, OrdersModule],
})
export class AppModule {}
