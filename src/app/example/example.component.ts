import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {

  content: string = ''
  private router = inject(Router)


  reloadComponent(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {
      skipLocationChange: true,
    }).then(()=>{
      this.router.navigate([currentUrl])
    });
  }

  loadData(){
    this.content = 'Data loaded at '+ new Date().toLocaleTimeString();
  }

  constructor(){
    this.loadData();
  }
}
