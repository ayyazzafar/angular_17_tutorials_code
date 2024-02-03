import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const progressCircle: any = document.querySelector(
      '.autoplay-progress svg'
    );
    const progressContent: any = document.querySelector(
      '.autoplay-progress span'
    );

    const swiperEl: any = document.querySelector('swiper-container');
    swiperEl.addEventListener('autoplaytimeleft', (e: any) => {
      const [swiper, time, progress] = e.detail;
      progressCircle.style.setProperty('--progress', 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    });
  }
}
