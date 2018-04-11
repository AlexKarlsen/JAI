import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data;
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getContent("1ZEdBUVLhusIsei8ikaOes")
      .then(data => this.data = data);
  }

}
