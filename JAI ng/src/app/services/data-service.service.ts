import { Injectable } from '@angular/core';

@Injectable() 
export class DataService {
  // Carrier object to pass data from a component to another one via this service.
  public serviceData: any; 
}
