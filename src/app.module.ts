import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProverbsModule } from './proverbs/proverbs.module';

@Module({
  imports: [ProverbsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
