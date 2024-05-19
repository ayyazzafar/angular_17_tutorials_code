import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  httpClient = inject(HttpClient);

  fetchUsers(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      console.log(data);
    });
  }

  constructor(){
    this.fetchUsers();
  }
}
