import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';

export class AnimalImpl implements Animal {
  public readonly id: number;
  public readonly name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class NullAnimalImpl implements Animal {
  public readonly id = -1;
  public readonly name = 'Unknown animal';
}
