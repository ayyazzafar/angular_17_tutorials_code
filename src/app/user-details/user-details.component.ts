import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  user: any;
  private route = inject(ActivatedRoute);

  constructor(){
    this.route.queryParams.subscribe(params =>{
      if(params['user']){
        this.user = JSON.parse(params['user'])
      }
      console.log(this.user);
    });
  }

}
