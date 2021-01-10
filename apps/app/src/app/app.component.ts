import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../../../../libs/api-interfaces/src/lib/animal.interface';
import { Observable } from 'rxjs';
import { AbstractAnimalService } from './services/animal.abstract-service';

@Component({
  selector: 'how-to-mock-angular-service-with-dependency-inversion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly _animals: Observable<Animal[]>;

  public get animals(): Observable<Animal[]> {
    return this._animals;
  }

  constructor(private animalService: AbstractAnimalService) {
    this._animals = this.animalService.getAnimals();
  }
}
