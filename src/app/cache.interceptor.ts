import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { of, tap } from 'rxjs';
import { CacheService } from './cache.service';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cacheService = inject(CacheService);

  if(req.method !== 'GET'){
    return next(req);
  }

  const cachedResponse = cacheService.get(req.urlWithParams);
  if(cachedResponse){

    return of(new HttpResponse(cachedResponse));
  }


  return next(req).pipe(
    tap(event=>{
      if(event instanceof HttpResponse){
        cacheService.set(req.urlWithParams, event );
      }
    })
  );
};
