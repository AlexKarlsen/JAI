import { Component, OnInit } from '@angular/core';
import { FacebookAppService } from '../services/facebook-app.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private fb: FacebookAppService) { }

  ngOnInit() {
    this.fb.GetEvents('412977102476743');
  }

}
