import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
   cache: any = {};

  set(key: string, value: any){
    this.cache[key] = value;
    localStorage.setItem('cache', JSON.stringify(this.cache));
  }

  get(key: string){
    if(this.cache[key]){
      return this.cache[key];
    }

    const cache = localStorage.getItem('cache');

    if(cache){
      this.cache = JSON.parse(cache);
      return this.cache[key];
    }
  }
}
