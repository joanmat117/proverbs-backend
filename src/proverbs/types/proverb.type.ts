import { CreateProverbDto } from '../dto/create-proverb.dto';

export interface Proverb extends CreateProverbDto {
  id: string;
  created_at: Date;
}
