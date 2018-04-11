import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacebookModule } from 'ngx-facebook';
import { AgmCoreModule } from '@agm/core';
import { MarkdownModule } from 'ngx-md';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component'
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './matches/matches.component';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { EventComponent } from './event/event.component';

import { ContentfulService } from './services/contentful.service';
import { DataService } from './services/data-service.service';
import { FacebookAppService } from './services/facebook-app.service';
import { PostArchiveComponent } from './post-archive/post-archive.component';

import { environment } from '../environments/environment';
import { BoardComponent } from './board/board.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { StartGuideComponent } from './start-guide/start-guide.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    PostDetailComponent,
    MatchesComponent,
    MatchesListComponent,
    EventComponent,
    PostArchiveComponent,
    BoardComponent,
    VolunteerComponent,
    SponsorsComponent,
    StartGuideComponent,
    AboutComponent,
    ContactComponent
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
    MatProgressSpinnerModule,
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.maps.apiKey
    }),
    MarkdownModule.forRoot()
  ],
  providers: [
    ContentfulService,
    DataService,
    FacebookAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
