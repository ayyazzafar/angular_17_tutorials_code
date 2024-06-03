import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articles: any[] =[];

  private dataService = inject(DataService);


  constructor(){
    this.loadArticles();
  }

  loadArticles(){
    this.dataService.getData('https://jsonplaceholder.typicode.com/posts').subscribe(data=>this.articles = data);
  }

}
