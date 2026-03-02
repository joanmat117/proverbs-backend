import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from "bcrypt"
import { ConfigService } from '@nestjs/config';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService
  ){}

  async create(user: CreateUserDto) {


    const passwordHash = await this.hashPassword(user.password)

    const {password,...restOfUser} = await this.prismaService.users.create({
      data:{
        ...user,
        password:passwordHash
      }
    })

    return restOfUser
  }

  async findOne({password,username}:FindUserDto){

    const {password:userPassword,...restOfUser} = await this.prismaService.users.findUniqueOrThrow({
      where:{username}
    })
    
    const isCorrectPassword = await bcrypt.compare(password,userPassword)

    if(isCorrectPassword) return restOfUser
    else throw new UnauthorizedException()
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private async hashPassword(password:string){
    const SALT_ROUNDS = +this.configService.get("SALT_ROUNDS")
    return await bcrypt.hash(password,SALT_ROUNDS)
  }
}
