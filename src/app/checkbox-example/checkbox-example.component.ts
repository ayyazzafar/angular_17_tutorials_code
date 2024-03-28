import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkbox-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox-example.component.html',
  styleUrl: './checkbox-example.component.scss'
})
export class CheckboxExampleComponent {
  isChecked = false;
  @ViewChild('checkboxForm') checkboxForm?: NgForm;

  onSubmit(){
    if(this.checkboxForm?.form.valid){
      alert('Form is valid');
    }
    else {
     // trigger touched state and validation
      this.checkboxForm?.form.markAllAsTouched();
    }
  }
}
