import { Injectable } from '@angular/core';
import {PreOrder} from "../enttity/pre-order";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Order} from "../enttity/order";
import {Auth} from "../enttity/auth";
import {ClientPersoService} from "./client-perso.service";

@Injectable({
  providedIn: 'root'
})
export class PreOrderService {

  static order: Order;
   auth: Auth;
  nameClient:string = 'User';

  constructor(private http: HttpClient) { }


  saveOrder(order: Order){
    return this.http.post('http://localhost:3000/orders',this.setOrder(order));
  }

  setOrder(finallOrder:Order): Order{
    PreOrderService.order.nameClient = this.nameClient;
    PreOrderService.order.numberOrder = 112;
    return PreOrderService.order;
  }

  // setOrder(preOrder: PreOrder[]): Order{
  //   this.order = {nameClient: this.nameClient, numberOrder:112, commands:preOrder, total: PreOrderService.total};
  //   return this.order;
  // }

}
