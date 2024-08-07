// src/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findUser(email:string){
    const result = await this.usersRepository.findOneBy({"email":email})
    if(!result){
      throw new NotFoundException("user doesnt exist");
    }
    return result;
  }
  async findallUser(){
    return await this.usersRepository.find()
  }

  async createUser(email: string, firebaseUid: string): Promise<User> {
    const user = this.usersRepository.create({ email, firebaseUid });
    return await this.usersRepository.save(user);
  }

  // Other service methods (e.g., findOne, findAll) can go here
}
