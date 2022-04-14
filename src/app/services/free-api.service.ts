import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreeAPIService {

  constructor(private FreeApiHttp:HttpClient) { }

  getFreeAPI(){
    return this.FreeApiHttp.get('https://randomfox.ca/floof/?ref=apilist.fun');
  }
}
