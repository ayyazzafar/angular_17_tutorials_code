import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
const $: any = window['$']
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @ViewChild('modal') modal?: ElementRef;
  title: string = '';
  content: string = '';


  openModal(title: string, content: string) {
    this.title = title;
    this.content = content;
    $(this.modal?.nativeElement).modal('show');

  }

  closeModal() {
    $(this.modal?.nativeElement).modal('hide');
  }
}
