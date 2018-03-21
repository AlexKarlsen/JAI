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

  async getContentAsync(id: string): Promise<any> {
    const response = await this.client.getEntry(id);
    return response.fields;
  };

  getLastByCount(number): Promise<contentful.Entry<any>[]>{
    return this.client.getEntries({
      content_type: 'blogPosts',
      order: '-sys.createdAt',
      limit: number
    }).then(res => res.items)
  }

  getComingMatches(number): Promise<contentful.Entry<any>[]>{
    var date: Date;
    date = new Date();
    date.setDate(date.getDate() - 1);
      console.log(date);
    return this.client.getEntries({
      content_type: 'kampe',
      'fields.kampdag[gte]': date,
      order: 'fields.kampdag',
      limit: number
    }).then(res => res.items)
  }

  // convert markdown string to 
  markdownToHtml(md: string) {
    var m = marked.setOptions({

    })
    return marked(md);
  };

}
