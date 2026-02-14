import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProverbsModule } from './proverbs/proverbs.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ProverbsModule,
    PrismaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
