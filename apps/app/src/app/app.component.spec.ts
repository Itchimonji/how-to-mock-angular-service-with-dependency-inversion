import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AnimalViewComponent } from './components/animal-view/animal-view.component';
import { AnimalAddComponent } from './components/animal-add/animal-add.component';
import { FormsModule } from '@angular/forms';
import { AbstractAnimalService } from './services/animal.abstract-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AnimalSearchComponent } from './components/animal-search/animal-search.component';
import { MockAnimalService } from './services/mocks/animal-test.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, AnimalViewComponent, AnimalAddComponent, AnimalSearchComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        {
          provide: AbstractAnimalService,
          useClass: MockAnimalService
        }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toEqual('Test Zoo');
  });
});
