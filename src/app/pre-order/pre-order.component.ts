import {AfterContentChecked, Component, DoCheck, OnInit} from '@angular/core';
import {PreOrder} from "../enttity/pre-order";
import {PreOrderService} from "../service/pre-order.service";
import {Order} from "../enttity/order";

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.css']
})
export class PreOrderComponent implements OnInit, DoCheck, AfterContentChecked{

  demiOrder:Order;

  constructor(private service: PreOrderService){}

  ngDoCheck(): void {}



  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.demiOrder = PreOrderService.order;
  }

  saveOrder() {
    this.service.saveOrder(this.demiOrder).subscribe((json)=>{console.log(json)});
  }



}
