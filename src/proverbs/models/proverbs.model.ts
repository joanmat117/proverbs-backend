import { Injectable, NotFoundException } from "@nestjs/common";
import { Proverb } from "../types/proverb.type";
import {randomUUID} from 'node:crypto'
import { CreateProverbDto } from "../dto/create-proverb.dto";
import { UpdateProverbDto } from "../dto/update-proverb.dto";

@Injectable()
export class ProverbsModel {
  
  private proverbs:Proverb[] = []

  getAll(){
    return this.proverbs
  }

  getOne(id:string){
    return this.proverbs.find((proverb)=>id === proverb.id)
  }

  create(proverb:CreateProverbDto){
  
    const id = randomUUID()

    this.proverbs.push({
      content:proverb.content,
      id,
      created_at: new Date()
    })

    return id 
  }

  bulkCreate(proverbs:CreateProverbDto[]){
    this.proverbs = [
      ...this.proverbs,
      ...proverbs.map(proverb=>({
        content:proverb.content,
        id:randomUUID(),
        created_at: new Date()
      }))
    ]

    return true
  }

  delete(id:string){
    const filteredProverbs = this.proverbs.filter(proverb=>proverb.id !== id)
    
    if(filteredProverbs.length === this.proverbs.length) return false

    this.proverbs = filteredProverbs

    return true
  }

  update(id:string,changes:UpdateProverbDto){
    
    const proverbIdx = this.proverbs.findIndex(proverb=>proverb.id === id)

    if(proverbIdx === -1) return

    this.proverbs[proverbIdx] = {
      ...this.proverbs[proverbIdx],
      ...changes      
    }

    return this.proverbs[proverbIdx]
  }

  getRandom(){
    if(this.proverbs.length === 0) throw new NotFoundException()
    const randomIdx = Math.trunc((this.proverbs.length) * Math.random())

    return this.proverbs[randomIdx]
  }

}
