import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-sites',
  templateUrl: './info-sites.component.html',
  styleUrls: ['./info-sites.component.css']
})

export class InfoSitesComponent implements OnInit {

  siteName;
  data;
  param;


  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = this.getContentId(params['site'])
      this.getContent(this.param).then(data => {
        this.data = data;
        console.log(data);
      });
    });
  }



  getContent(id) {
    return this.contentfulService.getContent(id);
  }

  getContentId(siteName) {
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

enum Sites {
  contact = "4oh9hyhW8oiWqKsMIgu4Cc",
  about = "1ZEdBUVLhusIsei8ikaOes",
  sponsors = "9pW7aCzgKQ6OECA2cESsU",
  notFound = "4WGGwt4zMsSIGqMyAUyAEc"
}