import { Injectable, NotFoundException } from '@nestjs/common';
import { Proverb } from '../types/proverb.type';
import { randomUUID } from 'node:crypto';
import { CreateProverbDto } from '../dto/create-proverb.dto';
import { UpdateProverbDto } from '../dto/update-proverb.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProverbsModel {

  constructor(
    private readonly prisma: PrismaService
  ){}

  async getAll() {
    return await this.prisma.proverbs.findMany()
  }

  async getOne(id: string) {
    return await this.prisma.proverbs.findUnique({
      where: {id}
    })
  }

  async create(proverb: CreateProverbDto) {

    const newProverb = await this.prisma.proverbs.create({
      data: {
        content: proverb.content
      }
    })

    return newProverb
  }

  async bulkCreate(proverbs: CreateProverbDto[]) {
   
    const newProverbs = await this.prisma.proverbs.createMany({
      data: proverbs 
    })

    return newProverbs
  }

  async delete(id: string) {
    
    await this.prisma.proverbs.delete({
      where: {id}
    })

    return true;
  }

  async update(id: string, {content}: UpdateProverbDto) {

    const updatedProverb = await this.prisma.proverbs.update({
      where:{id},
      data:{content}
    })

    return updatedProverb;
  }

  async getRandom() {
    
    const count = await this.prisma.proverbs.count()

    if (count === 0) throw new NotFoundException('There are not proverbs avaliable');

    const randomIdx = Math.floor(Math.random() * count);

    const [randomProverb] = await this.prisma.proverbs.findMany({
      skip:randomIdx,
      take: 1
    })

    return randomProverb
  }
}
