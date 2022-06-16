import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeProducts:any[] = [];
  constructor(_ProductsService: ProductsService) { 
    this.homeProducts = _ProductsService.products;
  }
  ngOnInit(): void {
  }

}
