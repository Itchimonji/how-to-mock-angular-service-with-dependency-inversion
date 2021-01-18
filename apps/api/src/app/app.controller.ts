import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('animals')
  getAnimals(): Animal[] {
    return [...this.appService.getAnimals()];
  }

  @Get('animalById/:id')
  getAnimalById(@Param('id') id: number): Animal {
    return this.appService.getAnimalById(id);
  }

  @Post('add')
  addAnimal(animal: Animal): number {
    return this.appService.addAnimal(animal);
  }

  @Post('addByName')
  async addAnimalByName(@Body('name') name: string): Promise<number> {
    console.log(name);
    return this.appService.addAnimalByIdAndName(this.appService.getAnimals().length, name);
  }

  @Post('addByIdAndName')
  addAnimalByIdAndName(id: number, name: string): number {
    return this.appService.addAnimalByIdAndName(id, name);
  }
}
