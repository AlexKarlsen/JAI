import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data-service.service'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.post = this.dataService.serviceData;
  }

}
