import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  headingVisible = false;
  generalService = inject(GeneralService);


  showHeading() {
    this.headingVisible = true;
  }

  constructor(){
    this.generalService.onButtonClick.subscribe(()=>{
      this.showHeading();
    });
  }
}
