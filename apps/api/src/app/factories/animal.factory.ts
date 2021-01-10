import { Animal } from '../models/animal.interface';
import { AnimalImpl } from '../models/animal.model';

export class AnimalFactory {
  public static createAnimal(id: number, name: string): Animal {
    return new AnimalImpl(id, name);
  }
}
