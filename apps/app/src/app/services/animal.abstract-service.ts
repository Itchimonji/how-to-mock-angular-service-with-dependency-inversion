import { Observable } from 'rxjs';
import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';

export abstract class AbstractAnimalService {
  public abstract getAnimals(): Observable<Animal[]>;
  public abstract getAnimalById(id: number): Observable<Animal>;
  public abstract addAnimal(animal: Animal): Observable<number>;
  public abstract addAnimalByName(name: string): Observable<number>;
  public abstract addAnimalByIdAndName(id: number, name: string): Observable<number>;
}
