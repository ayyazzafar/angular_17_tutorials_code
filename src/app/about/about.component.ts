import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  route = inject(ActivatedRoute);

  constructor(){
    console.log( this.route.snapshot.url);
    const currentUrl = this.route.snapshot.url.join('/');
    console.log(currentUrl);
  }
}
