import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';


@Injectable()
export class FacebookAppService {

  constructor(private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '147541496070957',
      xfbml: true,
      version: 'v2.12'
    };
    console.log('ctor');
    fb.init(initParams);
  }

  /**
   * GetEvents
   */
  public GetEvents(eventId: string) {
    this.fb.api("/JaiHaandboldAarhus/events","get", { access_token: "EAACEdEose0cBADraaC9WliAkvj4akWRjoYehBNPd9Gtt1bPE9EkbVLUjDKj6ZA0JZA7FdGmkDa5hIZA0fyAODzZB86CvZCZAXHcGJtuDzpYlDi7Iw0emkDvejbO2ZCmOICVauZBPKpesuIk5ZCwTnohHxU9zf1CJUwcLFtTuDnrSlxrufXrj7zaFFufZCST6y7ikEZD" }
    ).then(x => console.log(x))
  }
}
