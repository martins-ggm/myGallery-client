// src/app/services/image.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/images.model'; // Importe a interface Image
import { ImageUpload } from '../models/image-upload.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

uploadImage(data: ImageUpload): Observable<Image> {
  if (!data.file || data.file.name === 'empty' || data.file.size === 0) {
    throw new Error('Arquivo inválido ou não selecionado');
  }
  if (!data.file.type.startsWith('image/')) {
    throw new Error('O arquivo deve ser uma imagem');
  }

  const formData = new FormData();
  formData.append('image', data.file);
  if (data.name) formData.append('name', data.name);

  return this.http.post<Image>('http://localhost:3000/image/upload', formData);
}
}