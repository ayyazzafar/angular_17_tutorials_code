import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  http = inject(HttpClient)



  constructor(){
    this.loadArticles();
  }

  loadArticles(){
    const httpParams = new HttpParams({
      fromObject: {
        offset: this.offset,
        limit: this.limit
      }
    });
    this.http.get('https://jsonplaceholder.typicode.com/posts',{
      params: httpParams
    }).subscribe((data: any)=>{
      this.articles = data;
    });
  }

}
