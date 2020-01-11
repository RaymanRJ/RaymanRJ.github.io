import { Component, OnInit, Input } from '@angular/core';
import { AppImage } from 'src/classes/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {  }
  
  @Input() image: AppImage;

}
