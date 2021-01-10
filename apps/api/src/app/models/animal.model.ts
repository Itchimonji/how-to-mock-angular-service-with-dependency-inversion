import { Animal } from '../../../../../libs/api-interfaces/src/lib/animal.interface';

export class AnimalImpl implements Animal {
  private readonly _id: number;
  private readonly _name: string;

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }
}

export class NullAnimalImpl implements Animal {
  public get id(): number {
    return -1;
  }

  public get name(): string {
    return 'Unknown animal';
  }
}
