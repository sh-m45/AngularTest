import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-three-tools',
  templateUrl: './three-tools.component.html',
  styleUrls: ['./three-tools.component.css']
})
export class ThreeToolsComponent implements OnInit {
  lengthProducts! :number ; 
  homeProducts:any[] = [];
  constructor(_ProductsService: ProductsService) { 
    this.lengthProducts = JSON.parse(localStorage.getItem('products') as string).length;
  }

  ngOnInit(): void {
    this.homeProducts = JSON.parse(localStorage.getItem('simpleProducts') as string);
  }

}
