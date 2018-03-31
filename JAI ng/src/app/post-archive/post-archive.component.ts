import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { DataService } from '../services/data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-archive',
  templateUrl: './post-archive.component.html',
  styleUrls: ['./post-archive.component.css']
})
export class PostArchiveComponent implements OnInit {
  LOAD_COUNT_NUMBER = 10;
  posts: Array<any>;
  loadCount: number = this.LOAD_COUNT_NUMBER;
  noMore: Boolean = false;

  constructor(
    private contentfulService: ContentfulService, 
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contentfulService.getLastByCount(this.LOAD_COUNT_NUMBER)
      .then(posts => this.posts = posts);
    
  };

  loadMore() {
    if(this.posts.length != this.LOAD_COUNT_NUMBER){
      this.noMore = true;
    } 
      this.contentfulService.getLastByCount(this.LOAD_COUNT_NUMBER, this.loadCount)
        .then(posts => posts.forEach(post => this.posts.push(post)));
      this.loadCount += this.LOAD_COUNT_NUMBER;
        
  }

  isValid(){
    return false;
  }

  onSelect(post): void {
    // Save the data to pass onto the post-detail component
    this.dataService.serviceData = post;
    // navigate to component
    this.router.navigate(['/detail/' + post.sys.id]);
  }
}

