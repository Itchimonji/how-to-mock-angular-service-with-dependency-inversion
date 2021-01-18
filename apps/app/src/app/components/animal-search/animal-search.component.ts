import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';
import { AbstractAnimalService } from '../../services/animal.abstract-service';

@Component({
  selector: 'animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: ['./animal-search.component.scss']
})
export class AnimalSearchComponent {

  private _id: number;
  private _searchedAnimal: Observable<Animal>;

  public set id(value: number) {
    this._id = value;
  }

  public get searchedAnimal(): Observable<Animal> {
    return this._searchedAnimal;
  }

  constructor(private animalService: AbstractAnimalService) {
    this._id = 0;
  }

  public btnSearchAnimal(): void {
    return this.getAnimalsById();
  }

  private getAnimalsById(): void {
    this._searchedAnimal = this.animalService.getAnimalById(this._id);
  }

}
