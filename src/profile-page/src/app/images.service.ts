import { Injectable } from '@angular/core';
import { AppImage } from 'src/classes/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getImages(): AppImage[]{
    let images: AppImage[];

    return images;
  }


}
