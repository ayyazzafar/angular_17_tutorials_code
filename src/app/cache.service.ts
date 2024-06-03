import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();

  constructor() { }


  get(key: string): Observable<any> | null {
    return this.cache.has(key) ? of(this.cache.get(key)) : null;
  }

  set(key: string, value: any): void{
    this.cache.set(key, value)
  }
}
