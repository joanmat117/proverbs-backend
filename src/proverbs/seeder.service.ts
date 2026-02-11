import { Injectable, InternalServerErrorException, OnModuleInit } from "@nestjs/common";
import { ProverbsModel } from "./models/proverbs.model";
import { PROVERBS_SEED } from "./data/seeds";
import {ConfigService} from '@nestjs/config'

@Injectable()
export class SeederService implements OnModuleInit {

  constructor(
    private readonly proverbsModel: ProverbsModel,
    private readonly configService: ConfigService
  ){}

  onModuleInit() {
    const isDevelopment = this.configService.get('NODE_ENV') === 'development'

    if (isDevelopment) {
      this.populateProverbs()
    }
  }

  populateProverbs(){
    try {
      this.proverbsModel.bulkCreate(PROVERBS_SEED)

      return true
    } catch (e) {
      throw new InternalServerErrorException()
    }
  }
}
