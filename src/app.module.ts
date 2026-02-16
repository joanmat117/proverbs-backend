import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExercisesModule } from './exercises/exercises.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ExercisesModule,
    PrismaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
