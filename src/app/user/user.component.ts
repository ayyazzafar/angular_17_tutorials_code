import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  private router = inject(Router)


  navigateWithQueryParams(){
    const user = {
      id: 1,
      name: 'John Done',
      email: 'example@gmail.com'
    }

    const queryParams = {
      user: JSON.stringify(user)
    }

    this.router.navigate(['/user-detail'], {
      queryParams
    })
  }

}
