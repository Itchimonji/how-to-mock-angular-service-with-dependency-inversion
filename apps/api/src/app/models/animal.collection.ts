import { Animal } from './animal.interface';
import { AnimalFactory } from '../factories/animal.factory';
import { NullAnimalImpl } from './animal.model';

export class AnimalCollection {
  private readonly _collection: Animal[];

  constructor() {
    this._collection = new Array<Animal>();
  }

  public add(animal: Animal): number {
    return this._collection.push(animal);
  }

  public addByIdAndName(id: number, name: string): number {
    return this._collection.push(AnimalFactory.createAnimal(id, name));
  }

  public get(): Animal[] {
    return [...this._collection];
  }

  public getById(id: number): Animal {
    const result: Animal = this._collection.find(x => x.id === id);
    return result || new NullAnimalImpl();
  }

  public fillWithMocks(data: string[]): Animal[] {
    data.forEach((animalName: string) => {
      this._collection.push(AnimalFactory.createAnimal(this._collection.length, animalName));
    });
    return [...this._collection];
  }
}
