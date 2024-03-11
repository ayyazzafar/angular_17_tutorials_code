import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogPostService } from '../blog-post.service';
@Component({
  selector: 'app-blog-post-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-post-list.component.html',
  styleUrl: './blog-post-list.component.scss',
  animations: [
    trigger('pageAnimation', [
      state('void', style({ opacity: 0, transform: 'translateX(-20%)' })),
      transition(':increment', [
        style({ opacity: 0, transform: 'translateX(-20%)' }),
        animate('250ms', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ opacity: 0, transform: 'translateX(-20%)' }),
        animate('250ms', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class BlogPostListComponent implements OnInit {
  blogPosts: any[] = [];
  currentPage = 1;
  totalPages = 0;
  limit = 10;

  private blogPostService = inject(BlogPostService);

  searchQuery = '';

onSearchChange() {
  this.currentPage = 1;
  this.fetchPosts();
}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.blogPostService
      .getPosts(this.currentPage, this.limit, this.searchQuery)
      .subscribe((response) => {
        this.blogPosts = response.posts;
        this.totalPages = response.totalPages;
      });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchPosts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchPosts();
    }
  }
}
