import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private refreshSubject = new Subject<void>()

  constructor() { }


  get refresh$(){
    return this.refreshSubject.asObservable()
  }

  triggerRefresh(){
    this.refreshSubject.next();
  }
}
