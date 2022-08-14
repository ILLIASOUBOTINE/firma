import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {ContentHomeComponent} from "./content-home/content-home.component";
import {ContentProductComponent} from "./content-product/content-product.component";
import {ContentDescriptionCardComponent} from "./content-description-card/content-description-card.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {PreOrderComponent} from "./pre-order/pre-order.component";
import {ClientSpaceComponent} from "./client-space/client-space.component";
import {Registration1Component} from "./registration1/registration1.component";
import {OrdersClientComponent} from "./orders-client/orders-client.component";

const routes: Routes =[
  {path: 'home_page', component: HomePageComponent},
  {path: 'content_home', component: ContentHomeComponent},
  {path: 'content_product', component: ContentProductComponent},
  {path: 'content_description_card', component: ContentDescriptionCardComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'pre_order', component: PreOrderComponent},
  {path: 'client_perso', component: ClientSpaceComponent, children: [
      {path: 'orders', component: OrdersClientComponent},
    ] },
  {path: 'registration', component: Registration1Component},
  {path: '', redirectTo: 'home_page', pathMatch: 'full'}
  ]



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
