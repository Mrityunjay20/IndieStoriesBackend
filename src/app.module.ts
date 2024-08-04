import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ShopModule } from './shop/shop.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './shop/entities/product.entity';

@Module({
  controllers: [AppController],
  providers: [AppService, AuthService],
  imports: [AuthModule, ShopModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mrityunjaymanas',
    database: 'testdb',
    entities: [Product],
    synchronize: true  //only to use in development enviornment NEVER IN production
  })],
})
export class AppModule {}
