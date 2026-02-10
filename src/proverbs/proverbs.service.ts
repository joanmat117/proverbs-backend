import { Injectable } from '@nestjs/common';
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

  getOne(id: string):Proverb|undefined {
    return this.proverbsModel.getOne(id)
  }

  update(id: string, updateProverbDto: UpdateProverbDto):Proverb|undefined {
    return this.proverbsModel.update(id,updateProverbDto)
  }

  delete(id: string):Boolean {
    return this.proverbsModel.delete(id)
  }
}
