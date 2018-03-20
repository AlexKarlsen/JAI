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
  constructor(private contentfulService: ContentfulService, private router: Router, private dataService: DataService ) { }
  selectedPost;

  ngOnInit() {

    //this.contentfulService.logContent('5VhDGQ8RPi4iMEcaqYQyKe');
    //this.post$ = this.contentfulService.getContent('5VhDGQ8RPi4iMEcaqYQyKe');
    //console.log(this.post$);
    this.contentfulService.getLastByCount(4)
      .then(posts => this.Posts = posts)
      .then(posts => console.log(posts));

  }

  onSelect(post): void {
    this.dataService.serviceData = post;
    this.router.navigate(['/detail/' + post.sys.id]);
  }
}
