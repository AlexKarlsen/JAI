import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { DataService } from '../services/data-service.service';
import { Router } from '@angular/router';

const LOAD_COUNT_NUMBER = 10;
@Component({
  selector: 'app-post-archive',
  templateUrl: './post-archive.component.html',
  styleUrls: ['./post-archive.component.css']
})
export class PostArchiveComponent implements OnInit {

  posts: Array<any>;
  loadCount: number = LOAD_COUNT_NUMBER;

  constructor(
    private contentfulService: ContentfulService, 
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contentfulService.getLastByCount()
      .then(posts => this.posts = posts);
    this.loadCount += LOAD_COUNT_NUMBER;
  };
  /* loadMore() {
    this.contentfulService.getLastByCount(this.loadCount, LOAD_COUNT_NUMBER)
      .then(posts => this.posts = posts);
    console.log(this.loadCount);
    console.log("ArraySize: " + this.posts.length);
    this.loadCount += LOAD_COUNT_NUMBER;
  } */
  onSelect(post): void {
    // Save the data to pass onto the post-detail component
    this.dataService.serviceData = post;
    // navigate to component
    this.router.navigate(['/detail/' + post.sys.id]);
  }
}

