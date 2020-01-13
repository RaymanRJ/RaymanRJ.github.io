import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[RequestService]
})
export class ProjectsComponent implements OnInit {
  repos: any;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getData("https://api.github.com/users/raymanrj/repos").subscribe( data => this.repos = data );
  }

  format_date(date: string): string{
    return date.substring(0, 10);
  }
}
