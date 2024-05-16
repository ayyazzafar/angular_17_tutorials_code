import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  route = inject(ActivatedRoute);

  constructor(){
    const test = this.route.snapshot.params['test'];
    const name = this.route.snapshot.queryParams['name'];
    console.log('ID: ' + test + ' Name: ' + name);
    const currentUrl = this.route.snapshot.url.join('/');
    console.log(currentUrl);
  }
}
