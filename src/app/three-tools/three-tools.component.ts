import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-three-tools',
  templateUrl: './three-tools.component.html',
  styleUrls: ['./three-tools.component.css']
})
export class ThreeToolsComponent implements OnInit {
  lengthProducts! :number ; 
  homeProducts:any[] = [];
  idCilck:number = 0;
  
  showProduct(index: number){
    console.log(index);
    if(index < 4)
    {
      this.idCilck = this.homeProducts[index].id ;  
      this.router.navigate(['/three-tools/', { id: (this.idCilck)-3 }]);
    }
    else{
      this.idCilck = this.homeProducts[index-3].id ; 
      this.router.navigate(['/three-tools/', { id: this.idCilck }]);
    } 
     
    
  }
  
  constructor(_ProductsService: ProductsService, private route: ActivatedRoute, private router: Router) {  
    this.lengthProducts = JSON.parse(localStorage.getItem('products') as string).length;
  }

  ngOnInit(): void {
    this.homeProducts = JSON.parse(localStorage.getItem('simpleProducts') as string);
  }

}
