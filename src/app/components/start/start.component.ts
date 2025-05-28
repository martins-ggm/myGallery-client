import { CommonModule, NgOptimizedImage } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ImageUploadModalComponent } from '../image-upload-modal/image-upload-modal.component';
import { Image } from '../../models/images.model';


@Component({
  selector: 'app-start',
  imports: [NgOptimizedImage,ImageUploadModalComponent, CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
 showModal = false;

  openImageUpload() {
    this.showModal = true;
  }

  onModalClosed() {

    this.showModal = false;
  }



    headerTitle = "My Gallery :)"

  changeTitle = (SecondTitle: "Our Gallery :D") => {

    this.headerTitle = SecondTitle;
  }

onImageUploaded(uploadedImage: Image) {
  console.log('Imagem enviada:', uploadedImage);
  // Aqui você pode atualizar a galeria ou mostrar uma mensagem
  this.showModal = false; // Fecha o modal
}


}
