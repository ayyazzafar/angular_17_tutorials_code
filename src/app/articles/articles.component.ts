import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articles: any[] =[];
  offset = 0;
  limit = 10;

  private dataService = inject(DataService);


  constructor(){
    this.loadArticles();
  }

  loadArticles(){
    this.dataService.getData('https://jsonplaceholder.typicode.com/posts', {
      offset: this.offset,
      limit: this.limit
    }).subscribe(data=>this.articles = data);
  }

}
