import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';
import { AbstractAnimalService } from '../../services/animal.abstract-service';

@Component({
  selector: 'animal-view',
  templateUrl: './animal-view.component.html',
  styleUrls: ['./animal-view.component.scss']
})
export class AnimalViewComponent {

  private _animals: Observable<Animal[]>;

  public get animals(): Observable<Animal[]> {
    return this._animals;
  }

  constructor(private animalService: AbstractAnimalService) {
    this.getAnimals();
  }

  public getAnimals(): void {
    this._animals = this.animalService.getAnimals();
  }
}
