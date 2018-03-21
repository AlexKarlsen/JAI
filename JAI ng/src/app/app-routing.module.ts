import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { InfoSitesComponent } from './info-sites/info-sites.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'matches', component: MatchesListComponent},
  { path: 'info/:site', component: InfoSitesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
