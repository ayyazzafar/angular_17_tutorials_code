import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  router = inject(Router)

  items = [
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 4' },
    { id: 5, name: 'item 5' },
    { id: 6, name: 'item 6' }

  ]

  goToDetail(id: number) {
    this.router.navigate(['/detail'], {
      queryParams:{
        id
      }
    });
  }
}
