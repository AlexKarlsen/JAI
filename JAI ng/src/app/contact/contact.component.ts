import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data;
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getContent('4oh9hyhW8oiWqKsMIgu4Cc')
      .then(data => this.data = data);
  }

}
