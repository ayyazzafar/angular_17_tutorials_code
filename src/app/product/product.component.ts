import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  productService = inject(ProductService)
  product: any;
  errorMessage: string = '';

  fetchProduct(){
    this.productService.getProductById(12323243354545).subscribe({
      next: (data)=>{
        this.product = data;
        console.log(data);
      },

    });
  }

  constructor(){
    this.fetchProduct();
  }

}
