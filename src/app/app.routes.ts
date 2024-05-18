import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

export const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'test2', component: Test2Component},
];
