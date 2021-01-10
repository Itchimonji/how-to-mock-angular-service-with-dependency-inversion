import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Animal } from './models/animal.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('animals')
  getAnimals(): Animal[] {
    return this.appService.getAnimals();
  }

  @Get('animalById')
  getAnimalById(id: number): Animal {
    return this.appService.getAnimalById(id);
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
