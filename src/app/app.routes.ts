import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
  {path: 'user',component: UserComponent},
  {path: 'user-detail', component: UserDetailsComponent}
];
