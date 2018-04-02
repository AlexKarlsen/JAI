import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latitude: number = 56.1776591;
  longitude: number =  10.2095014;

  constructor() { }

  ngOnInit() {
  }

}
