import { IsDefined, IsEnum, IsString, Length } from 'class-validator';
import { Exercise } from '../types/exercise.type';
import { Category, Difficulty } from 'generated/prisma/enums';

export class CreateExerciseDto implements Omit<Exercise,"id"|"created_at"> {

  @IsDefined()
  @IsString()
  @Length(8)
  content: string;

  @IsDefined()
  @IsEnum(Category)
  category: Category;

  @IsDefined()
  @IsEnum(Difficulty)
  difficulty: Difficulty;

}
