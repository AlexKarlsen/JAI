import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
