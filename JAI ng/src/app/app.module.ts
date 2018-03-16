import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component'
import { HomeComponent } from './home/home.component';

import { ContentfulService } from './services/contentful.service';
import { DataService } from './services/data-service.service';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    MdToHtmlPipe,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    ContentfulService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
