import {Component, DoCheck, OnInit} from '@angular/core';
import {PreOrder} from "../enttity/pre-order";
import {PreOrderService} from "../service/pre-order.service";

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.css']
})
export class PreOrderComponent implements OnInit, DoCheck {
  preOrders: PreOrder[];
  total: number = 0;

  constructor(private service: PreOrderService){}

  ngDoCheck(): void {

    PreOrderService.preOrders= this.sorrtArr(PreOrderService.preOrders,PreOrderService.counter );
    this.preOrders = PreOrderService.preOrders;
    this.total = PreOrderService.total;
    console.log(PreOrderService.counter);
    }

  ngOnInit(): void {
  }

  sorrtArr(arr:PreOrder[], counter:number):PreOrder[]{
    arr.sort(function (a,b){return (a.id - b.id)});
    arr = arr.slice(0,(counter));
    console.log(arr)
    return arr;
  }

  saveOrder() {
      this.service.saveOrder(this.preOrders).subscribe((json)=>{console.log(json)});
  }
}
