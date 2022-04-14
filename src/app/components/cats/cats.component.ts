import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {


  cats:any = [];

  constructor(private catsService:CatsService) {
    this.catsService.getCats().subscribe(data => {
      this.cats = data;
    });
  
   }

  ngOnInit(): void {
  }

}
