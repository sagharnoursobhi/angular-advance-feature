import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors: string[];
  isActive = true;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
