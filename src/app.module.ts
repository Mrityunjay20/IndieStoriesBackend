import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [UsersModule, AdminModule, OrdersModule, ProductsModule, ShopModule, AuthModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
