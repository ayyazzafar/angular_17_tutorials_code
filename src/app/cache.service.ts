import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();

  constructor() { }


  get(url: string, params: any = {}, body: any = {}): Observable<any> | null {
    const key = this.generateCacheKey(url, params, body);
    return this.cache.has(key) ? of(this.cache.get(key)) : null;
  }

  set(url: string, params: any ={}, body: any  = {}, value: any): void{
    const key = this.generateCacheKey(url, params, body);
    this.cache.set(key, value)
  }

  private generateCacheKey(url: string, params: any, body: any): string{
    return `${url}|${JSON.stringify(params)}|${JSON.stringify(body)}`
  }
}
