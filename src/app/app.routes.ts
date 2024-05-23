import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginComponent } from './login/login.component';
import { guardGuard } from './guard.guard';

export const routes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2/:userId',
    canActivate: [guardGuard],
  component: Page2Component},
  {path: 'login', component: LoginComponent},
];
