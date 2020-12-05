import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/shopping-cart/product-list/product-item/product-details/product-details.component';

const routes: Routes = [
  { path: 'home', component: ShoppingCartComponent },
  { path: ':id', component: ProductDetailsComponent },
  { path: '', component: ShoppingCartComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
