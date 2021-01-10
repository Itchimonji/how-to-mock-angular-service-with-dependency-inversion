import { Observable } from 'rxjs';
import { Animal } from '../../../../../libs/api-interfaces/src';

export abstract class AbstractAnimalService {
  public abstract getAnimals(): Observable<Animal[]>;
  public abstract getAnimalById(): Observable<Animal[]>;
  public abstract addAnimal(animal: Animal): Observable<number>;
  public abstract addAnimalByIdAndName(id: number, name: string): Observable<number>;
}
