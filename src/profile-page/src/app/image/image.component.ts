import { Component, OnInit, Input } from '@angular/core';
import { AppImage } from 'src/classes/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  _image: AppImage;
  filepath = "../assets/images/";
  
  @Input() 
  set image(image: AppImage){
    this._image = image;
    this.filepath += `${image.filepath}`;
  };

  get image(): AppImage { return this._image; }

}
