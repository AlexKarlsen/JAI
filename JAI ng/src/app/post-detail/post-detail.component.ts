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
  post;
  postId: string;

  constructor(private route: ActivatedRoute, private dataService: DataService, private contentfulService: ContentfulService) { }

  ngOnInit() {
    if (this.dataService.serviceData == null) {
      this.route.params.subscribe(params => {
        this.postId = params['id'];
        console.log('post id: ' + this.postId);
        this.getContent(this.postId).then(data => 
            {
              this.post = data;
              console.log(this.post);
            });
      });  
    }
    else {
      this.post = this.dataService.serviceData;
    }
    
  }
 /*  this.route.params.subscribe(params => {
    this.postId = params['id'];
  });*/
  getContent(id) {
    return this.contentfulService.getContent(this.postId);
  }
}
