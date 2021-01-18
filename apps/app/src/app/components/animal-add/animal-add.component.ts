import { Component, OnDestroy } from '@angular/core';
import { AbstractAnimalService } from '../../services/animal.abstract-service';
import { Observable } from 'rxjs';
import { DestroySubscription } from '../../models/destroy-subscription.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.scss']
})
export class AnimalAddComponent extends DestroySubscription implements OnDestroy {
  private _message: string;
  private _valueAnimal: string;

  public set valueAnimal(value: string) {
    this._valueAnimal = value;
  }

  public get message(): string {
    return this._message;
  }

  constructor(private animalService: AbstractAnimalService) {
    super();
    this._valueAnimal = '';
    this._message = '';
  }

  ngOnDestroy() {
    this.onDestroy();
  }

  public btnAddAnimal(): void {
    this.addAnimal(this._valueAnimal)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((response: number) => {
      this._message = 'Successfully created "' +this._valueAnimal + '" with id ' + response.toString();
    });
  }

  private addAnimal(value: string): Observable<number> {
    return this.animalService.addAnimalByName(value);
  }

}
