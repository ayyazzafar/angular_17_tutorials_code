import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {
    path: 'example', component: ExampleComponent,
  },
  {
    path: '', component: TestComponent
  }
];
