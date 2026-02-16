import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { ExercisesModel } from './models/exercises.model';
import { SeederService } from './seeder.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService, ExercisesModel, SeederService, ConfigService],
})
export class ExercisesModule {}
