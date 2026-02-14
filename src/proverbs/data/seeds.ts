import { CreateProverbDto } from '../dto/create-proverb.dto';

export const PROVERBS_SEED: CreateProverbDto[] = [
  'Más vale tarde que nunca',
  'Ojos que no ven, corazón que no siente',
  'En casa de herrero, cuchillo de palo',
  'Perro que ladra no muerde',
  'Dime con quién andas y te diré quién eres',
  'El que mucho abarca, poco aprieta',
  'Camarón que se duerme, se lo lleva la corriente',
  'A palabras necias, oídos sordos',
  'Nadie es profeta en su tierra',
  'A mal tiempo, buena cara',
].map((string) => ({ content: string }));
