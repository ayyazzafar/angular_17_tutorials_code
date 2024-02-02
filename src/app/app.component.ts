import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fb = inject(FormBuilder);

  userProfileForm = this.fb.group({
    personalInfo: this.fb.group({
      name: '',
      email: '',
    }),
    addresses: this.fb.array([
      this.fb.group({
        street: '',
        city: '',
        zipCode: '',
      }),
    ]),
  });

  get addressGroups() {
    return this.userProfileForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addressGroups.push(
      this.fb.group({
        street: '',
        city: '',
        zipCode: '',
      })
    );
  }

  removeAddress(index: number) {
    this.addressGroups.removeAt(index);
  }
}
