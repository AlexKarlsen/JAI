import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  volunteerWork: any[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getVolunteerWork()
      .then(data => this.volunteerWork = data);
  }

}
