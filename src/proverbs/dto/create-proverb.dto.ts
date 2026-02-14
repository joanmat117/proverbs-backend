import { IsDefined, IsString, Length } from 'class-validator';

export class CreateProverbDto {
  @IsDefined()
  @IsString()
  @Length(8)
  content: string;
}
