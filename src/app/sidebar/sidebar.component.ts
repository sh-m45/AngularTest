import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  lengthProducts = 0 ; 
  lengthProductsSimple! :number ; 
  lengthProductsComplex! :number ; 
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.lengthProducts = JSON.parse(localStorage.getItem('products') as string).length;
      this.lengthProductsSimple = JSON.parse(localStorage.getItem('simpleProducts') as string).length;
      this.lengthProductsComplex = JSON.parse(localStorage.getItem('complexProducts') as string).length;
    }, 300);
    
    // console.log(this.lengthProducts);
  }

}
