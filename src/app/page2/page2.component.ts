import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
  route = inject(ActivatedRoute)
  userId=''
  queryParams = {}

  constructor(){
    this.route.params.subscribe((params)=>{
      this.userId = params['userId'];
    });

    this.route.queryParams.subscribe((
      queryParams
    )=>{
      this.queryParams = queryParams;
    });
  }
}
