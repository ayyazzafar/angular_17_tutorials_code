import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private apiUrl = 'http://localhost:3000/api/posts';
  http = inject(HttpClient);
  constructor() {}

  getPosts(page: number, limit: number, searchQuery: string): Observable<any> {
    const params = { page: page.toString(), limit: limit.toString(), searchQuery };
    return this.http.get(this.apiUrl, { params });
  }
}
