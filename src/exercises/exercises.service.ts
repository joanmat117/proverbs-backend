import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ExercisesModel } from './models/exercises.model';

@Injectable()
export class ExercisesService {
  constructor(private readonly exercisesModel: ExercisesModel) {}

  async create(createExerciseDto: CreateExerciseDto) {
    return await this.exercisesModel.create(createExerciseDto);
  }

  async getAll() {
    return await this.exercisesModel.getAll();
  }

  async getOne(id: string) {
    const res = await this.exercisesModel.getOne(id);

    if (!res)
      throw new NotFoundException(`Exercise with id ${id} does not exists`);

    return res;
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto) {
    const res = await this.exercisesModel.update(id, updateExerciseDto);

    if (!res)
      throw new NotFoundException(`Exercise with id ${id} does not exists`);

    return res;
  }

  async delete(id: string) {
    const res = await this.exercisesModel.delete(id);

    if (!res)
      throw new NotFoundException(`Exercise with id ${id} does not exists`);

    return res;
  }

  async getRandom() {
    return await this.exercisesModel.getRandom();
  }
}
