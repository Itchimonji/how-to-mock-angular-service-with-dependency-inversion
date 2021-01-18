import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';

export class AnimalImpl implements Animal {

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  constructor(private readonly _id: number, private readonly _name: string) { }
}

export class NullAnimalImpl implements Animal {
  public get id(): number {
    return -1;
  }

  public get name(): string {
    return 'Unknown animal';
  }
}
