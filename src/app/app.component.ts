import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    ImageSliderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  slides: any[] = [
    {
      url: '/assets/images/image1.avif',
      title: 'First slide',
      description: 'This is the first slide',
    },
    {
      url: '/assets/images/image2.avif',
      title: 'Second slide',
      description: 'This is the second slide',
    },
    {
      url: '/assets/images/image3.avif',
      title: 'Third slide',
      description: 'This is the third slide',
    },
    {
      url: '/assets/images/image4.avif',
      title: 'Fourth slide',
      description: 'This is the fourth slide',
    },
    {
      url: '/assets/images/image5.avif',
      title: 'Fifth slide',
      description: 'This is the fifth slide',
    },
  ];
}
