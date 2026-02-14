import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { ProverbsService } from './proverbs.service';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { UpdateProverbDto } from './dto/update-proverb.dto';
import { SeederService } from './seeder.service';

@Controller('proverbs')
export class ProverbsController {
  constructor(
    private readonly proverbsService: ProverbsService,
    private readonly seederService: SeederService,
  ) {}

  @Post('seed')
  @HttpCode(HttpStatus.CREATED)
  async seed() {
    const isPopulated = await this.seederService.populateProverbs();

    if (!isPopulated) {
      throw new InternalServerErrorException(
        'Can not populate db with proverbs',
      );
    }

    return {
      message: 'Proverbs DB successfully populated',
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProverbDto: CreateProverbDto) {
    const newProverb = await this.proverbsService.create(createProverbDto);

    return {
      message: `Proverb successfully created`,
      data: newProverb
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll() {
    return await this.proverbsService.getAll();
  }

  @Get('random')
  @HttpCode(HttpStatus.OK)
  async getRandom() {
    return await this.proverbsService.getRandom()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.proverbsService.getOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.PARTIAL_CONTENT)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProverbDto: UpdateProverbDto,
  ) {
    return await this.proverbsService.update(id, updateProverbDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    const deletedProverb = await this.proverbsService.delete(id);

    return {
      message: `Proverb ${id} ${!deletedProverb && 'was not'} successfully deleted`,
    };
  }
}
