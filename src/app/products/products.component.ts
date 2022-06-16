import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  homeProducts:any[] = [];
  constructor(_ProductsService: ProductsService) { 
    this.homeProducts = _ProductsService.products;
  }

  ngOnInit(): void {
  }

}
