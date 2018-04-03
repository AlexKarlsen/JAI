import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  members: any[];

  constructor(private contetentfulService: ContentfulService) { }

  ngOnInit() {
    this.contetentfulService.getBoardMembers()
      .then(data => this.members = data);
  }

}
