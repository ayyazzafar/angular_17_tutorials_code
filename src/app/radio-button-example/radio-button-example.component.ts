import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-button-example',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './radio-button-example.component.html',
  styleUrl: './radio-button-example.component.scss'
})
export class RadioButtonExampleComponent {

  fb = inject(FormBuilder)

  options = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 4', value: 'option4'}
  ]

  form: FormGroup= this.fb.group({
    selectedOption: ['', Validators.required]
  });

  constructor(){
  }

}
