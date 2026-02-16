import {
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import { ExercisesModel } from './models/exercises.model';
import { EXERCISES_SEED } from './data/seeds';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(
    private readonly exercisesModel: ExercisesModel,
    private readonly configService: ConfigService,
  ) {}

  async onModuleInit() {
    const isDevelopment = this.configService.get('NODE_ENV') === 'development'
    if(!isDevelopment) return

    const isExercisesEmpty = await this.exercisesModel.getCount() === 0

    if(isExercisesEmpty) this.populateExercises();
  }

  async populateExercises() {
    try {
      await this.exercisesModel.bulkCreate(EXERCISES_SEED);

      return true;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
