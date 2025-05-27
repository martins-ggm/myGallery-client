import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-image-upload-modal',
  imports: [],
  templateUrl: './image-upload-modal.component.html',
  styleUrl: './image-upload-modal.component.css'
})
export class ImageUploadModalComponent {

   @Output() close = new EventEmitter<void>();

  closeModal() {
    console.log('Fechando modal...');
    this.close.emit();
  }


  
}
