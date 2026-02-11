import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpCode, HttpStatus, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ProverbsService } from './proverbs.service';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { UpdateProverbDto } from './dto/update-proverb.dto';
import { SeederService } from './seeder.service';

@Controller('proverbs')
export class ProverbsController {
  constructor(
    private readonly proverbsService: ProverbsService,
    private readonly seederService: SeederService
  ) {}

  @Post('seed')
  @HttpCode(HttpStatus.CREATED)
  seed(){
    const isPopulated = this.seederService.populateProverbs() 

    if(!isPopulated){
      throw new InternalServerErrorException('Can not populate db with proverbs')
    }

    return {
      message: 'Proverbs DB successfully populated'
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProverbDto: CreateProverbDto) {
    const proverbId = this.proverbsService.create(createProverbDto)

    return {
      message:`Proverb successfully created`,
      id:proverbId
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.proverbsService.getAll();
  }

  @Get('random')
  @HttpCode(HttpStatus.OK)
  getRandom(){
    return this.proverbsService.getRandom()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id',ParseUUIDPipe) id: string) {
    const res = this.proverbsService.getOne(id)
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
    

    const res = this.proverbsService.delete(id)

    return {
      message:`Proverb ${id} ${!res && 'was not' } successfully deleted`
    }
  }

  
}
