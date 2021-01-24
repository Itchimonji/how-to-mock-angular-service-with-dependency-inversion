import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { AbstractAnimalService } from './animal.abstract-service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService implements AbstractAnimalService {
  constructor(private http: HttpClient) { }

  public getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>('api/animals');
  }

  public getAnimalById(id: number): Observable<Animal> {
    return this.http.get<Animal>('api/animalById/' + id);
  }

  public addAnimal(animal: Animal): Observable<number> {
    return this.http.post<number>('api/add', { animal } );
  }

  public addAnimalByName(name: string): Observable<number> {
    console.log(name);
    return this.http.post<number>('api/addByName', { name: name });
  }

  public addAnimalByIdAndName(id: number, name: string): Observable<number> {
    return this.http.post<number>('api/addByIdAndName', { id, name} );
  }
}
