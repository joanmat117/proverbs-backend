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
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { SeederService } from './seeder.service';

@Controller('exercises')
export class ExercisesController {
  constructor(
    private readonly exercisesService: ExercisesService,
    private readonly seederService: SeederService,
  ) {}

  @Post('seed')
  @HttpCode(HttpStatus.CREATED)
  async seed() {
    const isPopulated = await this.seederService.populateExercises();

    if (!isPopulated) {
      throw new InternalServerErrorException(
        'Can not populate db with exercises',
      );
    }

    return {
      message: 'Exercises DB successfully populated',
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createExerciseDto: CreateExerciseDto) {
    const newExercise = await this.exercisesService.create(createExerciseDto);

    return {
      message: `Exercise successfully created`,
      data: newExercise
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll() {
    return await this.exercisesService.getAll();
  }

  @Get('random')
  @HttpCode(HttpStatus.OK)
  async getRandom() {
    return await this.exercisesService.getRandom()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.exercisesService.getOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.PARTIAL_CONTENT)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return await this.exercisesService.update(id, updateExerciseDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    const deletedExercise = await this.exercisesService.delete(id);

    return {
      message: `Exercise with id ${id} ${!deletedExercise && 'was not'} successfully deleted`,
    };
  }
}
