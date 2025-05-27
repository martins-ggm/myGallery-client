import { CommonModule, NgOptimizedImage } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ImageUploadModalComponent } from '../image-upload-modal/image-upload-modal.component';



@Component({
  selector: 'app-start',
  imports: [NgOptimizedImage,ImageUploadModalComponent, CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
 showModal = false;

  openImageUpload() {
    console.log('Abrindo modal...');
    this.showModal = true;
  }

  onModalClosed() {
    console.log('Modal fechado...');
    this.showModal = false;
  }


 // private http = inject(HttpClient)


  headerTitle = "My Gallery :)"

  changeTitle = (SecondTitle: "Our Gallery :D") => {

    this.headerTitle = SecondTitle;
  }

    // sendImage = () => {

      //this.http.post<any>('/image',)



    //}






 


}
