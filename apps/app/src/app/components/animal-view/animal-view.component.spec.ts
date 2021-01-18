import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalViewComponent } from './animal-view.component';
import { FormsModule } from '@angular/forms';
import { AbstractAnimalService } from '../../services/animal.abstract-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockAnimalService } from '../../services/mocks/animal-test.service';
import { Animal } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';

describe('AnimalViewComponent', () => {
  let component: AnimalViewComponent;
  let fixture: ComponentFixture<AnimalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalViewComponent ],
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
    fixture = TestBed.createComponent(AnimalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get all animals', done => {
    component.getAnimals();
    component.animals.subscribe((next: Animal[]) => {
      expect(next).toEqual([
        { _id: 0, _name: 'Zebra' },
        { _id: 1, _name: 'Rabbit' },
        { _id: 2, _name: 'cat' }
      ]);
      done();
    })
  });
});
