import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './shop/entities/product.entity';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ShopModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mrityunjaymanas',
    database: 'testdb',
    entities: [Product],
    synchronize: true  //only to use in development enviornment NEVER IN production
  }), CartModule, UserModule, AdminModule],
})
export class AppModule {}
