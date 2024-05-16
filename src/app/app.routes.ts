import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact/:test', component: ContactComponent},
];
