import { Component } from '@angular/core';

@Component({
  selector: 'how-to-mock-angular-service-with-dependency-inversion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public get title(): string {
    return 'Test Zoo';
  }
}
