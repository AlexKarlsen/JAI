import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import {Router} from '@angular/router';

import { Entry } from 'contentful';
import { ContentfulService } from '../services/contentful.service';

import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private Posts: Entry<any>[] = [];
  constructor(
    private contentfulService: ContentfulService, 
    private router: Router, 
    private dataService: DataService 
  ) { }

  ngOnInit() {
    // Get the number of posts needed to feed the component
    this.contentfulService.getLastByCount(4)
      .then(posts => this.Posts = posts)
  }

  // Post click event to see Post-detail component
  onSelect(post): void {
    // Save the data to pass onto the post-detail component
    this.dataService.serviceData = post;
    // navigate to component
    this.router.navigate(['/detail/' + post.sys.id]);
  }
}
