import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ManagmentComponent } from './components/managment/managment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PriceComponent } from './components/price/price.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path:'',
    component: SignUpComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'managment',
    component: ManagmentComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'price',
    component: PriceComponent
  },
  {
    path:'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
