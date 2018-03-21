import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  matches;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getComingMatches()
      .then(data => this.matches = data).then(s => console.log(s));
  }

}
