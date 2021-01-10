import { Injectable } from '@nestjs/common';
import {AnimalCollection} from "./models/animal.collection";
import {Animal} from "./models/animal.interface";
import { mockAnimals } from './mocks/animal.mock';

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
    return this.animalCollection.add(animal);
  }

  public addAnimalByIdAndName(id: number, name: string): number {
    return this.animalCollection.addByIdAndName(id, name);
  }


}
