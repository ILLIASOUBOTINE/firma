import { Injectable } from '@angular/core';
import {PreOrder} from "../enttity/pre-order";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Order} from "../enttity/order";
import {Auth} from "../enttity/auth";
import {ClientPersoService} from "./client-perso.service";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PreOrderService {

  static order: Order;
   auth: Auth;
  //nameClient:string = 'User';

  constructor(private http: HttpClient) { }


  saveOrder(){
    return this.http.post('http://localhost:3000/orders',this.setOrder());
  }


  setOrder(): Order{
    PreOrderService.order.nameClient = AuthService.client.username;
    return PreOrderService.order;
  }

  // setOrder(preOrder: PreOrder[]): Order{
  //   this.order = {nameClient: this.nameClient, numberOrder:112, commands:preOrder, total: PreOrderService.total};
  //   return this.order;
  // }

}
