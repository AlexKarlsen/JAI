import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import * as marked from 'marked';

import { environment } from '../../environments/environment'



@Injectable()
export class ContentfulService {

  //obsReturn: Rx.Observable<contentful.EntryCollection<any>>;
  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  logContent(contentId) {
    this.client.getEntry(contentId)
      .then((entry) => console.log(entry));
  };

  getContent(contentId) {
    const promise = this.client.getEntry(contentId);
    return Observable.fromPromise(promise).map(entry => entry.fields);
  };

  getLastByCount(number): Promise<contentful.Entry<any>[]>{
    return this.client.getEntries({
      limit: number
    }).then(res => res.items)
    
    //return Observable.fromPromise(promise).map((collection) => 
    //  collection.items);
  }

  // convert markdown string to 
  markdownToHtml(md: string) {
    return marked(md);
  };

}
