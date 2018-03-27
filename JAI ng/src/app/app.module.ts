import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacebookModule } from 'ngx-facebook';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component'
import { HomeComponent } from './home/home.component';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';
import { MatchesComponent } from './matches/matches.component';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { InfoSitesComponent } from './info-sites/info-sites.component';
import { EventComponent } from './event/event.component';

import { ContentfulService } from './services/contentful.service';
import { DataService } from './services/data-service.service';
import { FacebookAppService } from './services/facebook-app.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    MdToHtmlPipe,
    PostDetailComponent,
    MatchesComponent,
    MatchesListComponent,
    InfoSitesComponent,
    EventComponent
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
    MatButtonModule,
    FacebookModule.forRoot()
  ],
  providers: [
    ContentfulService,
    DataService,
    FacebookAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
