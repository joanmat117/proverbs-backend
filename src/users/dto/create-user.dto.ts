import { IsDefined, IsString, MinLength } from "class-validator";
import {User} from "../types/user.type"

export class CreateUserDto implements Omit<User,"id"|"created_at"> {

  @IsDefined()
  @IsString()
  @MinLength(3)
  username: string;

  @IsDefined()
  @IsString()
  @MinLength(8) 
  password: string;
}
