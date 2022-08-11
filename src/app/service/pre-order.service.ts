import { Injectable } from '@angular/core';
import {PreOrder} from "../enttity/pre-order";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Order} from "../enttity/order";

@Injectable({
  providedIn: 'root'
})
export class PreOrderService {
  static preOrders: PreOrder[] = [];
  static total: number = 0;
  static counter: number;
  order: Order;
  nameClient:string = 'User';

  constructor(private http: HttpClient) { }

  saveOrder(order: PreOrder[]){
    return this.http.post('http://localhost:3000/orders',this.setOrder(order));
  }

  setOrder(preOrder: PreOrder[]): Order{
    this.order = {nameClient: this.nameClient, numberOrder:112, commands:preOrder, total: PreOrderService.total};
    return this.order;
  }

}
