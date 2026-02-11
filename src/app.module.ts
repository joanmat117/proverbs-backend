import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProverbsModule } from './proverbs/proverbs.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ProverbsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
