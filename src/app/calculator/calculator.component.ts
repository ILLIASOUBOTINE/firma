import { Component, OnInit } from '@angular/core';
import {TABLE_PRODUCT} from "../models/table";
import {Product} from "../enttity/product";
import {PreOrderService} from "../service/pre-order.service";
import {PreOrder} from "../enttity/pre-order";
import {Order} from "../enttity/order";


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  products: Product[];
  total:number;
  varr: number[] = [];
  preOrders: PreOrder[] = [];
  counter:number = 0;
  order: Order;

  constructor() { }

  ngOnInit(): void {
    this.products = TABLE_PRODUCT;
  }

  summ(event: Event, product:Product) {

    this.varr[product.id] = Number((<HTMLInputElement>event.target).value)*product.price;
    let amount = this.varr[product.id]/product.price;
    this.preOrders[product.id] = {id:product.id, name:product.name, price:product.price, amount:amount, unit:product.unit, sum:this.varr[product.id]};
    let val: number = 0;
    let counter = 0;
    this.varr.forEach(function (value) {
      if(value > 0){
        counter = counter + 1;
      }
      val = val+value;
    });

    this.preOrders = this.sorrtArr(this.preOrders,counter);
    PreOrderService.order = this.setDemiOrder(this.preOrders, val);
    this.total = val;
    this.counter = counter;


    console.log(this.total);

    // PreOrderService.preOrders = this.preOrders;
    // PreOrderService.total = this.total;
    // PreOrderService.counter = counter;
    console.log(this.order);
  }

  sorrtArr(arr:PreOrder[], counter:number):PreOrder[]{
    arr.sort(function (a,b){return (a.id - b.id)});
    arr = arr.slice(0,(counter));
    console.log(arr)
    return arr;
  }

  setDemiOrder(preOrder: PreOrder[],total:number):Order{
    this.order = {commands:preOrder, total:total};
    return this.order;
  }



}
