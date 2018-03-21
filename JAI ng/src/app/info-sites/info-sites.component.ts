import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-sites',
  templateUrl: './info-sites.component.html',
  styleUrls: ['./info-sites.component.css']
})

export class InfoSitesComponent implements OnInit {


  private data: any;
  private param: string;

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Getting the path from the Url
    this.route.params.subscribe(params => {
      this.param = this.getContentId(params['site']);
      // Getting contentful entry 
      this.getContent(this.param).then(data => {
        this.data = data;
        console.log(data);
      });
    });
  }

  private getContent(id) {
    return this.contentfulService.getContent(id);
  }

  // Violating O/C principal, might need to implement strategy pattern
  /** Get entry id of content stored in enum*/
  private getContentId(siteName) {
    switch (siteName) {
      case 'contact': {
        return Sites.contact;
      }
      case 'about': {
        return Sites.about;
      }
      case 'sponsors': {
        return Sites.sponsors;
      }
      default: {
        return Sites.notFound;
      }
    }
  }
}

/** Enumeration of contentful entry id's on completely static pages */
enum Sites {
  contact = "4oh9hyhW8oiWqKsMIgu4Cc",
  about = "1ZEdBUVLhusIsei8ikaOes",
  sponsors = "9pW7aCzgKQ6OECA2cESsU",
  notFound = "4WGGwt4zMsSIGqMyAUyAEc"
}