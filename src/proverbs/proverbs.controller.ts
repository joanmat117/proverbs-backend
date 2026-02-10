import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { ProverbsService } from './proverbs.service';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { UpdateProverbDto } from './dto/update-proverb.dto';

@Controller('proverbs')
export class ProverbsController {
  constructor(private readonly proverbsService: ProverbsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProverbDto: CreateProverbDto) {
    return this.proverbsService.create(createProverbDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.proverbsService.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id',ParseUUIDPipe) id: string) {
    const res = this.proverbsService.getOne(id)

    if(!res) throw new NotFoundException(`Proverb with id ${id} does not exists`)

    return res
  }

  @Patch(':id')
  @HttpCode(HttpStatus.PARTIAL_CONTENT)
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateProverbDto: UpdateProverbDto) {
    return this.proverbsService.update(id, updateProverbDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id',ParseUUIDPipe) id: string) {
    

    return this.proverbsService.delete(id);
  }
}
