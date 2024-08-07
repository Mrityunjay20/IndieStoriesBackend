// src/user/user.controller.ts
import { Controller, Post, Body, Get, Param, ConflictException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { createUserDto } from './dtos/create-user.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/:email")
  async oneUsers(@Param("email") email: string){
    return await this.userService.findUser(email);
  }

  @Get()
  async allUsers(){
    return await this.userService.findallUser();
  }

  @Post('signup')
  async signUp(@Body() body: createUserDto){
    console.log("hello "+body.email, body.firebaseUid);
    const exists = await this.userService.findUser(body.email);
    if(exists){
      throw new ConflictException;
    }else{
      return await this.userService.createUser(body.email, body.firebaseUid);
    }
  }

  // Other controller methods (e.g., login) can go here
}
