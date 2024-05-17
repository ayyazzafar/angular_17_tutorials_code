import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss'
})
export class ProductFilterComponent implements OnInit {
  selectedCategory: string = '';
  route = inject(ActivatedRoute)
  router = inject(Router)


  ngOnInit(): void {


  }

  applyFilters(){
    const queryParams: any = {};

    if( this.selectedCategory){
      queryParams.category = this.selectedCategory;
    }


    this.router.navigate([], {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    })
  }

}
