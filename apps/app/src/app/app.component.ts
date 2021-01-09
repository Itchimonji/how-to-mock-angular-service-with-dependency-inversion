import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';

@Component({
  selector: 'how-to-mock-angular-service-with-dependency-inversion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
