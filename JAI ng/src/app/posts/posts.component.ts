import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 

import { Post } from './posts';

import { Entry } from 'contentful';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post$: Observable<any>;
  posts$: Observable<any>;
  private Posts: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService ) { }

  ngOnInit() {
    //this.contentfulService.logContent('5VhDGQ8RPi4iMEcaqYQyKe');
    //this.post$ = this.contentfulService.getContent('5VhDGQ8RPi4iMEcaqYQyKe');
    //console.log(this.post$);
    this.contentfulService.getLastByCount(4)
      .then(posts => this.Posts = posts)
      .then(posts => console.log(posts));

  }
}
