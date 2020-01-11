import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  content = 'Home';

  change_content(content: string) {
    this.content = content;
    console.log(content);
  }

  constructor() { }

  ngOnInit() {
  }

}
