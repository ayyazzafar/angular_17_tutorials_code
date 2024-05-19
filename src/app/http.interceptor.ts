import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token') || 'xyz';
  if(token){
    req = req.clone({
    setHeaders:{
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
    })
  }
  return next(req);
};
