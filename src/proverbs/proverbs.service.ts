import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { UpdateProverbDto } from './dto/update-proverb.dto';
import { ProverbsModel } from './models/proverbs.model';
import { Proverb } from './types/proverb.type';

@Injectable()
export class ProverbsService {

  constructor(
    private readonly proverbsModel: ProverbsModel
  ){}

  create(createProverbDto: CreateProverbDto): string {
    return this.proverbsModel.create(createProverbDto)
  }

  getAll():Proverb[] {
    return this.proverbsModel.getAll();
  }

  getOne(id: string):Proverb {
    const res = this.proverbsModel.getOne(id)

    if(!res) throw new NotFoundException(`Proverb with id ${id} does not exists`)

    return res
  }

  update(id: string, updateProverbDto: UpdateProverbDto):Proverb {
    const res = this.proverbsModel.update(id,updateProverbDto)

    if(!res) throw new NotFoundException(`Proverb with id ${id} does not exists`)

    return res
  }

  delete(id: string):Boolean {
    const res = this.proverbsModel.delete(id)

    if(!res) throw new NotFoundException(`Proverb with id ${id} does not exists`)

    return res
  }

  getRandom():Proverb {
    return this.proverbsModel.getRandom()
  }
}
