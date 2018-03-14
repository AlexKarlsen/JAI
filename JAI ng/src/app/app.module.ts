import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';

import { ContentfulService } from './contentful.service';
import { MdToHtmlPipe } from './md-to-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    MdToHtmlPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
