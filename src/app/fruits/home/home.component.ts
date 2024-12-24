import { Component, OnInit } from '@angular/core';
import { Fruits} from '../fruits';
import { FruitsService } from '../fruits.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allfruits : Fruits[] = [];

  constructor(private fruitServicce : FruitsService) {}

  ngOnInit(): void {
    this.fruitServicce.getAll().subscribe((data) => {
      this.allfruits = data
    })
  }

}
