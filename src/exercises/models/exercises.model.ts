import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciseDto } from '../dto/create-exercise.dto';
import { UpdateExerciseDto } from '../dto/update-exercise.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExercisesModel {

  constructor(
    private readonly prisma: PrismaService
  ){}

  async getAll() {
    return await this.prisma.exercises.findMany()
  }

  async getOne(id: string) {
    return await this.prisma.exercises.findUnique({
      where: {id}
    })
  }

  async getCount() {
    return await this.prisma.exercises.count()
  }

  async create(exercise: CreateExerciseDto) {

    const newExercises = await this.prisma.exercises.create({
      data: {
        ...exercise
      }
    })

    return newExercises
  }

  async bulkCreate(exercises: CreateExerciseDto[]) {
   
    const newExercises = await this.prisma.exercises.createMany({
      data: exercises 
    })

    return newExercises
  }

  async delete(id: string) {
    
    await this.prisma.exercises.delete({
      where: {id}
    })

    return true;
  }

  async update(id: string, {content}: UpdateExerciseDto) {

    const updatedExercise = await this.prisma.exercises.update({
      where:{id},
      data:{content}
    })

    return updatedExercise;
  }

  async getRandom() {
    
    const count = await this.prisma.exercises.count()

    if (count === 0) throw new NotFoundException('There are not exercise avaliable');

    const randomIdx = Math.floor(Math.random() * count);

    const [randomExercise] = await this.prisma.exercises.findMany({
      skip:randomIdx,
      take: 1
    })

    return randomExercise
  }
}
