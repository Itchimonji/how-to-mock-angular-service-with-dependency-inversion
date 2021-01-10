import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private parseJsonAnimalList(list: Animal[]): Animal[] {
    return JSON.parse(JSON.stringify(list).split('"_id":').join('"id":').split('"_name":').join('"name":'));
  }

private parseJsonAnimal(value: Animal): Animal {
    return JSON.parse(JSON.stringify(value).split('"_id":').join('"id":').split('"_name":').join('"name":'));
  }


  @Get('animals')
  getAnimals(): Animal[] {
    return this.parseJsonAnimalList([...this.appService.getAnimals()]);
  }

  @Get('animalById')
  getAnimalById(id: number): Animal {
    return this.parseJsonAnimal(this.appService.getAnimalById(id));
  }

  @Post('add')
  addAnimal(animal: Animal): number {
    return this.appService.addAnimal(animal);
  }

  @Post('addByIdAndName')
  addAnimalByIdAndName(id: number, name: string): number {
    return this.appService.addAnimalByIdAndName(id, name);
  }
}
