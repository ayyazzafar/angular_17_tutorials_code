import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   fruits: string[] = ['apple',  'orange', 'banana',];
   numbers: number[] = [1, 2, 5, 3, 4];
   searchTerm = '';
   filteredItems: string[] = [];
  data: any = [];
   constructor(){


    let slicedNumbers = this.numbers.slice(1, 4); // [2, 3, 4]

    let combinedArrays: any [] = this.numbers.concat(this.fruits as any);
    // [1, 2, 3, 4, 5, 'apple', 'banana', 'orange']
    this.data = combinedArrays;

     let hasApple = this.fruits.includes('apple'); // true
     let index = this.fruits.indexOf('sdfasfda'); // -1

      let foundFruit = this.fruits.find(fruit => fruit.startsWith('o')); // 'orange'
      let doubledNumbers = this.numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

      let evenNumbers = this.numbers.filter(num => num % 2 === 0); // [2, 4]

      let sum = this.numbers.reduce((acc, num) => acc + num, 0); // 15

      let sortedNumbers = this.numbers.sort(); // [1, 2, 3, 4, 5]

      let sortedFruits = this.fruits.sort((a, b) => a.localeCompare(b)); // ['apple', 'banana', 'orange']
   }

   onItemAdded(item: string) {
    this.data.push(item);
   }

   filterItems() {
    console.log('abc')
    this.filteredItems = this.data.filter((item: string)=> String(item).toLowerCase().includes(this.searchTerm.toLowerCase()))
    console.log(this.filteredItems);
   }


}
