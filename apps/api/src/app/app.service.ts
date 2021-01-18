import { Injectable } from '@nestjs/common';
import {AnimalCollection} from "./models/animal.collection";

import { mockAnimals } from './mocks/animal.mock';
import { Animal } from '../../../../libs/api-interfaces/src/lib/animal.interface';

@Injectable()
export class AppService {
  private animalCollection: AnimalCollection;

  constructor() {
    this.animalCollection = new AnimalCollection();
    this.animalCollection.fillWithMocks(mockAnimals);
  }

  public getAnimals(): Animal[] {
    return this.animalCollection.get();
  }

  public getAnimalById(id: number): Animal {
    return this.animalCollection.getById(id);
  }

  public addAnimal(animal: Animal): number {
    return this.animalCollection.add(animal) - 1;
  }

  public addAnimalByIdAndName(id: number, name: string): number {
    return this.animalCollection.addByIdAndName(id, name) - 1;
  }


}
