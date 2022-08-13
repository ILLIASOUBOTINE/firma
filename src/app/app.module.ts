import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { RoutingContentComponent } from './routing-content/routing-content.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { ContentProductComponent } from './content-product/content-product.component';
import { ContentDescriptionCardComponent } from './content-description-card/content-description-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CaruselComponent } from './carusel/carusel.component';
import {CaruselService} from "./service/carusel.service";
import { CalculatorComponent } from './calculator/calculator.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import {PreOrderService} from "./service/pre-order.service";
import { ClientSpaceComponent } from './client-space/client-space.component';
import {ClientPersoService} from "./service/client-perso.service";
import { Registration1Component } from './registration1/registration1.component';
import {AutentificationComponent} from "./autentification/autentification.component";
import {OrderComponent} from "./order/order.component";
import {AuthService} from "./service/auth.service";



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HeaderComponent,
    RoutingContentComponent,
    ContentHomeComponent,
    ContentProductComponent,
    ContentDescriptionCardComponent,
    ContactsComponent,
    CaruselComponent,
    CalculatorComponent,
    PreOrderComponent,
    ClientSpaceComponent,
    Registration1Component,
    AutentificationComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CaruselService,
    PreOrderService,
    ClientPersoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
