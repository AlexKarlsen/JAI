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

  constructor() { }

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  /*   logContent(contentId) {
      this.client.getEntry(contentId)
        .then((entry) => console.log(entry));
    };
   */

  /** Get entry by id */
  public getContent(contentId) {
    return this.client.getEntry(contentId);
  };

  /** Get a number of entries */
  public getLastByCount(count?: number, skipCount?: number): Promise<contentful.Entry<any>[]> {
    return this.client.getEntries({
      content_type: 'blogPosts',
      order: '-sys.createdAt',
      limit: count,
      skip: skipCount
    }).then(res => res.items)
  };

  /** Get a number of coming matches */
  public getComingMatchesByNumber(number): Promise<contentful.Entry<any>[]> {
    var date: Date;
    date = new Date();
    date.setDate(date.getDate() - 1);
    return this.client.getEntries({
      content_type: 'kampe',
      'fields.kampdag[gte]': date,
      order: 'fields.kampdag',
      limit: number
    }).then(res => res.items)
  };

  /** Get all upcoming matches */
  public getComingMatches(): Promise<contentful.Entry<any>[]> {
    var date: Date;
    date = new Date();
    date.setDate(date.getDate() - 1);
    return this.client.getEntries({
      content_type: 'kampe',
      'fields.kampdag[gte]': date,
      order: 'fields.kampdag',
    }).then(res => res.items)
  };

  public getBoardMembers(): Promise<contentful.Entry<any>[]> {
    return this.client.getEntries({
      content_type: 'bestyrelsesmedlem',
      order: 'sys.createdAt',
      limit: 10,
    }).then(res => res.items)
  }

  /** Helper function to convert markdown to html. It is called by the pipe */
  public markdownToHtml(md: string) {
    var m = marked.setOptions({

    })
    return marked(md);
  };

}
