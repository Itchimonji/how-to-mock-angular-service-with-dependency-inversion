import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAddComponent } from './animal-add.component';
import { FormsModule } from '@angular/forms';
import { AbstractAnimalService } from '../../services/animal.abstract-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockAnimalService } from '../../services/mocks/animal-test.service';

describe('AnimalAddComponent', () => {
  let component: AnimalAddComponent;
  let fixture: ComponentFixture<AnimalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAddComponent ],
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
    fixture = TestBed.createComponent(AnimalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an animal', () => {
    component.valueAnimal = 'dog';
    component.btnAddAnimal();
    expect(component.message).toEqual('Successfully created "dog" with id 3');
  });
});
