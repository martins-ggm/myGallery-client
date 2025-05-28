import { Component, EventEmitter, Output } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/images.model';
import { ImageUpload } from '../../models/image-upload.model';

@Component({
  selector: 'app-image-upload-modal',
  templateUrl: './image-upload-modal.component.html',
  styleUrls: ['./image-upload-modal.component.css'],
})
export class ImageUploadModalComponent {
  imageData: ImageUpload = {
    file: null,
    name: '',
  };

  @Output() close = new EventEmitter<void>(); // Renomeado para simplificar
  @Output() uploadSuccess = new EventEmitter<Image>(); // Output para upload concluído

  constructor(private imageService: ImageService) {}

  // Método para selecionar arquivo
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      this.imageData = {
        file: input.files[0],
        name: input.files[0].name.split('.')[0] || '',
      };
    }
  }

  get selectedFile(): File | null {
    return this.imageData.file && this.imageData.file.name !== 'empty'
      ? this.imageData.file
      : null;
  }

  // Método para enviar a imagem
  errorMessage: string | null = null;

  uploadImage(): void {
    if (!this.imageData.file || this.imageData.file.name === 'empty') {
      this.errorMessage = 'Nenhum arquivo válido selecionado';
      return;
    }

    this.errorMessage = null; // Limpa mensagens anteriores
    this.imageService.uploadImage(this.imageData).subscribe({
      next: (response: Image) => {
        this.uploadSuccess.emit(response);
        this.closeModal();
      },
      error: (err) => {
        this.errorMessage = err.message || 'Erro ao enviar a imagem';
      },
    });
  }

  closeModal(): void {
    this.close.emit(); // Emite o evento de fechamento
  }
}
