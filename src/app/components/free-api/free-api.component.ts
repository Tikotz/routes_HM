import { Component, OnInit } from '@angular/core';
import { FreeAPIService } from 'src/app/services/free-api.service';

@Component({
  selector: 'app-free-api',
  templateUrl: './free-api.component.html',
  styleUrls: ['./free-api.component.css']
})
export class FreeAPIComponent implements OnInit {

  api:any = {};


  constructor(private FreeApiServices:FreeAPIService) {
    this.FreeApiServices.getFreeAPI().subscribe(data => {
      this.api = data;
    });
 

  }

  ngOnInit(): void {
  }

}
