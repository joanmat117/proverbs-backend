import { Module } from '@nestjs/common';
import { ProverbsService } from './proverbs.service';
import { ProverbsController } from './proverbs.controller';
import { ProverbsModel } from './models/proverbs.model';
import { SeederService } from './seeder.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ProverbsController],
  providers: [ProverbsService,ProverbsModel,SeederService,ConfigService],
})
export class ProverbsModule {}
