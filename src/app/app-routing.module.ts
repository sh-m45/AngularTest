import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexToolsComponent } from './complex-tools/complex-tools.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThreeToolsComponent } from './three-tools/three-tools.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch:'full'},
  {path: 'products', component:ProductsComponent},
  {path: 'three-tools', component:ThreeToolsComponent},
  {path: 'complex-tools', component:ComplexToolsComponent},
  // {path: 'products/:id', component:ProductsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
