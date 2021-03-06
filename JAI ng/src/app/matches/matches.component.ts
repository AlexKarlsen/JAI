import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { MarkdownService } from 'ngx-md';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  private matches: any;

  constructor(private contentfulService: ContentfulService, private marked: MarkdownService) { }

  ngOnInit() {
    // Getting the two coming matches
    this.contentfulService.getComingMatchesByNumber(2)
      .then(data => this.matches = data);

      this.marked.setMarkedOptions({
        tables: true
      })
  }


}
