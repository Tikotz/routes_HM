import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private catsHttp:HttpClient) { }

    getCats(){
      return this.catsHttp.get('https://cat-fact.herokuapp.com/facts');
    }
}
