import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { FBPageComponent } from 'ngx-facebook';
import { FacebookAppService } from '../services/facebook-app.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  sponsors: any[];

  constructor(private contentfulService: ContentfulService, fb: FacebookAppService) { }

  ngOnInit() {
    this.contentfulService.getSponsors()
      .then(data => this.sponsors = data);
  }

}
