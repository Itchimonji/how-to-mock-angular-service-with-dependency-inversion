import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AbstractAnimalService } from './services/animal.abstract-service';
import { AnimalViewComponent } from './components/animal-view/animal-view.component';
import { AnimalAddComponent } from './components/animal-add/animal-add.component';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './core/interceptors/http.interceptor';
import { MockAnimalService } from './services/mocks/animal-test.service';
import { AnimalSearchComponent } from './components/animal-search/animal-search.component';
import { AnimalService } from './services/animal.service';

const production = [
  { provide: AbstractAnimalService, useClass: AnimalService }
];

const test = [
  { provide: AbstractAnimalService, useClass: MockAnimalService }
];

@NgModule({
  declarations: [AppComponent, AnimalViewComponent, AnimalAddComponent, AnimalSearchComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    httpInterceptorProviders,
    // ...test <--- this can be used for a complete mock runtime modus
    ...production
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
