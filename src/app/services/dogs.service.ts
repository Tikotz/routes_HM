import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private dogHttp:HttpClient) {

   }

    getDogs(){
      return this.dogHttp.get('https://dog.ceo/api/breeds/image/random');
    }
}
