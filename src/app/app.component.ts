import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet,  } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  router = inject(Router)
  location = inject(Location)

  navigate(){
    this.router.navigate(['/page1']);
  }

  navigateToPage2(){
    let id = 63434
    this.router.navigate(['/page2', id]);
  }

  navigateToPage2WithQueryParams(){
    let id = 353443;
    this.router.navigate(['/page2', id], {queryParams: {name: 'John Doe', age: 34, city: 'New York'}});
  }

  navigateByUrl(){
    let somecondition = true;
    if(somecondition){
      this.router.navigateByUrl('/page1');
    }
    else{
      this.router.navigateByUrl('/page2/3434');
    }

  }

  goBack(){
    this.location.back();
  }

  goForward(){
    this.location.forward();
  }

}
