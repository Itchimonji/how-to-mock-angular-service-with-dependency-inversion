import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AbstractAnimalService } from './services/animal.abstract-service';
import { AnimalService } from './services/animal.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [{
    provide: AbstractAnimalService,
    useClass: AnimalService
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
