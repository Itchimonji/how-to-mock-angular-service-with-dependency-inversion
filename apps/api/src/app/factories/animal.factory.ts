
import { AnimalImpl } from '../models/animal.model';
import { Animal } from '../../../../../libs/api-interfaces/src/lib/animal.interface';

export class AnimalFactory {
  public static createAnimal(id: number, name: string): Animal {
    return new AnimalImpl(id, name);
  }
}
