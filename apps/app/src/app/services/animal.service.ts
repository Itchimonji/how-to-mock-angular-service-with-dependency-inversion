import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { AbstractAnimalService } from './animal.abstract-service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService extends AbstractAnimalService {
  private readonly API_URL = '/api/';

  constructor(private http: HttpClient) {
    super();
  }

  public getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.API_URL + 'animals');
  }

  public getAnimalById(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.API_URL + 'animalById');
  }

  public addAnimal(animal: Animal): Observable<number> {
    return this.http.post<number>(this.API_URL + 'add', animal );
  }

  public addAnimalByIdAndName(id: number, name: string): Observable<number> {
    return this.http.post<number>(this.API_URL + 'addByIdAndName', { id, name} );
  }
}
