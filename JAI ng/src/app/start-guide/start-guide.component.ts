import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-start-guide',
  templateUrl: './start-guide.component.html',
  styleUrls: ['./start-guide.component.css']
})
export class StartGuideComponent implements OnInit {

  data;
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getContent("4VKcY8ISU8wwqoSIqEUyK4")
      .then(data => this.data = data);
  }

}
