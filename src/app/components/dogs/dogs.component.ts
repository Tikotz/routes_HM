import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  
  dogs:any = {};
  submited:boolean = false;

  constructor(private dogService:DogsService) {
    this.dogService.getDogs().subscribe(data => {
      this.dogs = data;
    });
  }
   

  ngOnInit(): void {
  }

  showDoggo(){
    this.submited = !this.submited;
  }
}
