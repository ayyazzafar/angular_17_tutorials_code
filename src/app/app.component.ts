import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PreviousRouteService } from './previous-route.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  previousRouteService = inject(PreviousRouteService)

  constructor() {
    this.previousRouteService.urlChanged.subscribe((urls)=>{
      console.log('====From app.component.ts====')
      console.log('Previous URL:', urls.previousUrl);
      console.log('Current URL:', urls.currentUrl);

    });
  }


}
