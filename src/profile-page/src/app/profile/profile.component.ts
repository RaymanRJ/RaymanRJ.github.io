import { Component, OnInit, Input } from '@angular/core';
import { AppImage } from 'src/classes/image';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  @Input() images: AppImage[];



}
