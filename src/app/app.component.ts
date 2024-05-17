import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { map } from 'rxjs';

interface Product {
  name: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, ProductFilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  route = inject(ActivatedRoute);


  ngOnInit(): void {
    this.route.queryParamMap
    .pipe(map((params)=>({
      colors:params.get('colors')?.split(',') || [],
    })))
    .subscribe((params) => {

      console.log(params.colors)


    });
  }
}
