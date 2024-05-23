import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if(!isLoggedIn()){
    router.navigate(['/login']);
    return false;
  }
  return true;
};


function isLoggedIn(){
  return false;
}
