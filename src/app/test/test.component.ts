import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviousRouteService } from '../previous-route.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent  {

}
