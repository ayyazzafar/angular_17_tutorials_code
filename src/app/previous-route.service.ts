import { Injectable, inject } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { Subject } from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {

  private _previousUrl: string = '';
  private _currentUrl: string = '';

  urlChanged: Subject<{previousUrl: string, currentUrl: string}> = new Subject();

  router = inject(Router)

  constructor() {
    this._currentUrl = this.router.url;
    this.router.events.pipe(
      filter((event): event is NavigationEnd=> event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd)=>{
      this._previousUrl = this._currentUrl;
      this._currentUrl = event.url;

      this.urlChanged.next({previousUrl: this._previousUrl, currentUrl: this._currentUrl});
    });
   }

   getPreviousUrl() {
     return this._previousUrl;
   }

   getCurrentUrl() {
      return this._currentUrl;
    }
}
