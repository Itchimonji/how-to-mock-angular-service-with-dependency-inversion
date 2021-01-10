import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mockAnimals } from './mocks/animal.mock';
import { Animal } from './models/animal.interface';
import { AnimalFactory } from './factories/animal.factory';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  it('should return mock animals', () => {
    const appController = app.get<AppController>(AppController);
    const animals: Animal[] = appController.getAnimals();
    let id: number = 0;
    animals.forEach((animal: Animal) => {
      expect(animal.name).toEqual(mockAnimals[id]);
      id++;
    })
  });

  it('should return an Alligator & Zebra', () => {
    const appController = app.get<AppController>(AppController);
    const animal1: Animal = appController.getAnimalById(2);
    expect(animal1.name).toEqual('Alligator');
    const animal2: Animal = appController.getAnimalById(appController.getAnimals().length -1);
    expect(animal2.name).toEqual('Zebra');
  });

  it('should add a second Alligator', () => {
    const appController = app.get<AppController>(AppController);
    const id: number = appController.addAnimal(AnimalFactory.createAnimal(appController.getAnimals().length, 'Alligator2')) - 1;
    expect(appController.getAnimalById(id).name).toEqual('Alligator2');
  });

  it('should add a second Alligator with id and name', () => {
    const appController = app.get<AppController>(AppController);
    const id: number = appController.addAnimalByIdAndName(-1, 'Alligator2');
    expect(appController.getAnimalById(-1).name).toEqual('Alligator2');
  });


});
