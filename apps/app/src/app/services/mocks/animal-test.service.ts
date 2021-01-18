import { Injectable } from '@angular/core';
import { AbstractAnimalService } from '../animal.abstract-service';
import { Observable, of } from 'rxjs';
import { Animal } from '../../../../../../libs/api-interfaces/src';
import { AnimalFactory } from '../../models/animal.factory';
import { NullAnimalImpl } from '../../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class MockAnimalService implements AbstractAnimalService {
  private readonly listAnimals: Animal[];

  constructor() {
    this.listAnimals = new Array<Animal>();
    this.listAnimals.push(AnimalFactory.createAnimal(0, 'Zebra'));
    this.listAnimals.push(AnimalFactory.createAnimal(1, 'Rabbit'));
    this.listAnimals.push(AnimalFactory.createAnimal(2, 'cat'));
  }

  public getAnimals(): Observable<Animal[]> {
    return of([...this.listAnimals]);
  }
  public getAnimalById(id: number): Observable<Animal> {
    return of(this.listAnimals.find(x => x.id == id) || new NullAnimalImpl());
  }
  public addAnimal(animal: Animal): Observable<number> {
    return of(this.listAnimals.push(animal) - 1);
  }
  public addAnimalByName(name: string): Observable<number> {
    return of(this.listAnimals.push(AnimalFactory.createAnimal(this.listAnimals.length, name)) - 1);
  }
  public addAnimalByIdAndName(id: number, name: string): Observable<number> {
    return of(this.listAnimals.push(AnimalFactory.createAnimal(id, name)) - 1);
  }
}
