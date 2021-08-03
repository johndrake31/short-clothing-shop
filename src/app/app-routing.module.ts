import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { PanierComponent } from './panier/panier.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'home', component: ShopComponent },
  { path: 'newshort', component: AddItemComponent },
  { path: 'cart', component: PanierComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
