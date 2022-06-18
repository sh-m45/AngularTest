import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-complex-tools',
  templateUrl: './complex-tools.component.html',
  styleUrls: ['./complex-tools.component.css']
})
export class ComplexToolsComponent implements OnInit {

  lengthProducts! :number ; 
  homeProducts:any[] = [];
  idCilck:number = 0;
  
  showProduct(index: number){
    
    this.idCilck = this.homeProducts[index-2].id ;   
    this.router.navigate(['/complex-tools/', { id: this.idCilck }]);
  }



  constructor(_ProductsService: ProductsService, private route: ActivatedRoute, private router: Router) { 
    this.lengthProducts = JSON.parse(localStorage.getItem('products') as string).length;
  }

  ngOnInit(): void {
    this.homeProducts = JSON.parse(localStorage.getItem('complexProducts') as string);
  }

}
