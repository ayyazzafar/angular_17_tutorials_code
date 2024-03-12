import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterViewInit {
  @Input() items: any[] = [];
  @Output() itemAdded = new EventEmitter<string>();
  sortOrder: string = 'asc';
  sortedItems: number[] = [];

  addItem(item: string) {
    this.itemAdded.emit(item);
  }


  sortItems() {
    this.sortedItems = [...this.items].sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
      return this.sortOrder === 'asc' ? a - b : b - a;
      } else if (typeof a === 'string' && typeof b === 'string') {
      return this.sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
      } else {
      // Handle other types of items here
      return 0;
      }
    });
  }

  ngAfterViewInit(){
    this.sortItems();
  }

}
