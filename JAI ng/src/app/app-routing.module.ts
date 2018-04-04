import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { InfoSitesComponent } from './info-sites/info-sites.component';
import { PostArchiveComponent } from './post-archive/post-archive.component';
import { EventComponent } from './event/event.component';
import { BoardComponent } from './board/board.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { SponsorsComponent } from './sponsors/sponsors.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'board', component: BoardComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'matches', component: MatchesListComponent},
  { path: 'info/:site', component: InfoSitesComponent},
  { path: 'newsarchive', component: PostArchiveComponent },
  { path: 'events', component: EventComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'sponsors', component: SponsorsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
