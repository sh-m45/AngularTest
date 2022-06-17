import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-complex-tools',
  templateUrl: './complex-tools.component.html',
  styleUrls: ['./complex-tools.component.css']
})
export class ComplexToolsComponent implements OnInit {

  lengthProducts! :number ; 
  homeProducts:any[] = [];
  constructor(_ProductsService: ProductsService) { 
    this.lengthProducts = JSON.parse(localStorage.getItem('products') as string).length;
  }

  ngOnInit(): void {
    this.homeProducts = JSON.parse(localStorage.getItem('complexProducts') as string);
  }

}
