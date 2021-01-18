import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSearchComponent } from './animal-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AbstractAnimalService } from '../../services/animal.abstract-service';
import { MockAnimalService } from '../../services/mocks/animal-test.service';
import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';

describe('AnimalSearchComponent', () => {
  let component: AnimalSearchComponent;
  let fixture: ComponentFixture<AnimalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSearchComponent ],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        {
          provide: AbstractAnimalService,
          useClass: MockAnimalService
        }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should find an animal', done => {
    component.id = 1;
    component.btnSearchAnimal();
    component.searchedAnimal.subscribe((next: Animal) => {
      expect(next.name).toEqual('Rabbit');
      done();
    })
  });
});
