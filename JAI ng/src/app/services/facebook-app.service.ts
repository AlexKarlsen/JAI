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
    this.fb.api("/JaiHaandboldAarhus/events","get", { access_token: "" }
    ).then(x => console.log(x))
  }
}
