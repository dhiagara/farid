import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MagasinsComponent } from './magasins/magasins.component';
import { ProductComponent } from './product/product.component';
import {FaridComponent} from './farid/farid.component';

const routes: Routes = [
  {
  path: '',
    component: FaridComponent,},
    {
      path: 'magasins/:id',
      component : MagasinsComponent
    }
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
