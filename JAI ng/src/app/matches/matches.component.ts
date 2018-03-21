import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getComingMatchesByNumber(2)
      .then(data => this.matches = data).then(s => console.log(s));
  }


}