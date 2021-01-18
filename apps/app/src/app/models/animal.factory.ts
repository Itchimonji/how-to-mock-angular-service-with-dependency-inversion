import { Animal } from '../../../../../libs/api-interfaces/src';
import { AnimalImpl } from './animal.model';

export class AnimalFactory {
  public static createAnimal(id: number, name: string): Animal {
    return new AnimalImpl(id, name);
  }
}
