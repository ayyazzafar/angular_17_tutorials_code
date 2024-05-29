import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  itemId?: number;

  route = inject(ActivatedRoute)
  location = inject(Location)

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.itemId = params['id'];
      });
  }

  goBack(){
    this.location.back();
  }

}
