import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {


  return next(req).pipe(
    catchError((error: HttpErrorResponse)=>{
      let errorMessage = '';

      if(error.error instanceof ErrorEvent){
        console.error('An error occurred:', error.error.message);
        errorMessage = 'An error occurred '+ error.error.message;

      }
      else {
        console.error("Backend returned code "+ error.status, "Message: "+ error.message);
        errorMessage = "Backend returned code "+ error.status + "Message: "+ error.message;
      }

      if(error.status === 404){
        errorMessage = 'Product not found';
      }
      else if(error.status === 500){
        errorMessage = 'Internal server error';
      }
      else if(error.status === 401){
        errorMessage = 'Unauthorized';
      }
      else{
        errorMessage = 'An error occurred';
      }

      alert(errorMessage)

      //
      return throwError(()=>errorMessage);
    })
  );
};
