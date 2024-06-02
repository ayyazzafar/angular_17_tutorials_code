import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  generalService = inject(GeneralService);

}
