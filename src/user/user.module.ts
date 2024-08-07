// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Make sure User entity is included here
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Export UserService if used elsewhere
})
export class UserModule {}
