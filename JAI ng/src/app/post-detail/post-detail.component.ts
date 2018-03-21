import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data-service.service'
import { ContentfulService } from '../services/contentful.service';
import * as rx from 'rxjs/Observable';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {
  private post: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, private contentfulService: ContentfulService) { }

  ngOnInit() {
    // If the app is loaded here, the serviceData will be null, hence the post must be fetched.
    if (this.dataService.serviceData == null) {
      // Get the id from Url path
      this.route.params.subscribe(params => {
        // Get the contentful entry by the id
        this.contentfulService.getContent(params['id']).then(data => {
          this.post = data;
        });
      });
    }
    else {
      // Get passed on data from DataService
      this.post = this.dataService.serviceData;
    }
  }
}
