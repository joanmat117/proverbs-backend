import { Module } from '@nestjs/common';
import { ProverbsService } from './proverbs.service';
import { ProverbsController } from './proverbs.controller';
import { ProverbsModel } from './models/proverbs.model';

@Module({
  controllers: [ProverbsController],
  providers: [ProverbsService,ProverbsModel],
})
export class ProverbsModule {}
