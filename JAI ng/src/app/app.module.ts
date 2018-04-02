import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacebookModule } from 'ngx-facebook';
import { AgmCoreModule } from '@agm/core';

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
import { PostArchiveComponent } from './post-archive/post-archive.component';

import { environment } from '../environments/environment';

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
    EventComponent,
    PostArchiveComponent
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
    MatListModule,
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.maps.apiKey
    })
  ],
  providers: [
    ContentfulService,
    DataService,
    FacebookAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
