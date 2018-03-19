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
    return this.client.getEntry(contentId);
  };

  getLastByCount(number): Promise<contentful.Entry<any>[]>{
    return this.client.getEntries({
      order: '-sys.createdAt',
      limit: number
    }).then(res => res.items)
    
    //return Observable.fromPromise(promise).map((collection) => 
    //  collection.items);
  }

  // convert markdown string to 
  markdownToHtml(md: string) {
    var m = marked.setOptions({

    })
    return marked(md);
  };

}
