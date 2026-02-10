import { Injectable } from "@nestjs/common";
import { Proverb } from "../types/proverb.type";
import {randomUUID} from 'node:crypto'
import { CreateProverbDto } from "../dto/create-proverb.dto";
import { UpdateProverbDto } from "../dto/update-proverb.dto";

@Injectable()
export class ProverbsModel {
  
  private proverbs:Proverb[] = [{
    id:'70c068ce-db52-45e0-8f44-b7c924659859',
    content: 'No juzgues un libro por su portada'
  }]

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
      id
    })

    return id 
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

}
