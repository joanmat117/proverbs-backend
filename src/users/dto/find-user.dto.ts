import { IsDefined, IsString, MinLength } from "class-validator";
import {User} from "../types/user.type"

export class FindUserDto implements Pick<User,"username"|"password"> {

  @IsDefined()
  @IsString()
  @MinLength(3)
  username: string;

  @IsDefined()
  @IsString()
  @MinLength(8) 
  password: string;
}
