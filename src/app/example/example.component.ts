import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { RefreshService } from '../refresh.service';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent implements OnInit, OnDestroy{

  content: string = ''
  private subscription?: Subscription;
  private refreshService = inject(RefreshService);


  reloadComponent(){
   this.refreshService.triggerRefresh();
  }

  loadData(){
    this.content = 'Data loaded at '+ new Date().toLocaleTimeString();
  }

  ngOnInit(): void {
      this.subscription = this.refreshService.refresh$.subscribe(()=>{
        this.loadData();
      });

      this.loadData();
  }

  ngOnDestroy(): void {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
  }

}
