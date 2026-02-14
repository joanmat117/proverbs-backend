import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { UpdateProverbDto } from './dto/update-proverb.dto';
import { ProverbsModel } from './models/proverbs.model';
import { Proverb } from './types/proverb.type';

@Injectable()
export class ProverbsService {
  constructor(private readonly proverbsModel: ProverbsModel) {}

  async create(createProverbDto: CreateProverbDto) {
    return await this.proverbsModel.create(createProverbDto);
  }

  async getAll() {
    return await this.proverbsModel.getAll();
  }

  async getOne(id: string) {
    const res = await this.proverbsModel.getOne(id);

    if (!res)
      throw new NotFoundException(`Proverb with id ${id} does not exists`);

    return res;
  }

  async update(id: string, updateProverbDto: UpdateProverbDto) {
    const res = await this.proverbsModel.update(id, updateProverbDto);

    if (!res)
      throw new NotFoundException(`Proverb with id ${id} does not exists`);

    return res;
  }

  async delete(id: string) {
    const res = await this.proverbsModel.delete(id);

    if (!res)
      throw new NotFoundException(`Proverb with id ${id} does not exists`);

    return res;
  }

  async getRandom() {
    return await this.proverbsModel.getRandom();
  }
}
