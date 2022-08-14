import {AfterContentChecked, Component, DoCheck, OnInit} from '@angular/core';
import {PreOrder} from "../enttity/pre-order";
import {PreOrderService} from "../service/pre-order.service";
import {Order} from "../enttity/order";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.css']
})
export class PreOrderComponent implements OnInit, DoCheck, AfterContentChecked{

  demiOrder: Order;


  constructor(private service: PreOrderService, private authService: AuthService){}

  ngDoCheck(): void {}



  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.demiOrder = PreOrderService.order;
  }


  saveOrder() {
    if(AuthService.client != undefined){
      this.service.saveOrder().subscribe((json)=>{console.log(json)});
    }else{
      AuthService.messagePreOrder = 'для сохранения вашего заказа войдите в ваш акаунт или зарегистрируйтесь';
    }

  }




}
