import { Component, OnInit } from '@angular/core';
import { image_details } from 'src/assets/data/image_details.json';
import { AppImage } from 'src/classes/image';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  imageDetails: AppImage[] = image_details;
  content = 'Home';

  constructor() { }
  ngOnInit() { }

  change_content(content: string) {
    this.content = content;
    console.log(content);
  }

}
