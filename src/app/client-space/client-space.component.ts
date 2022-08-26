import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Order} from "../enttity/order";
import {ClientPersoService} from "../service/client-perso.service";
import {AuthService} from "../service/auth.service";
import {OrdersClientComponent} from "../orders-client/orders-client.component";

import {Client} from "../enttity/client";
import {AutentificationComponent} from "../autentification/autentification.component";
import {PreOrderService} from "../service/pre-order.service";


@Component({
  selector: 'app-client-space',
  templateUrl: './client-space.component.html',
  styleUrls: ['./client-space.component.css']
})
export class ClientSpaceComponent implements OnInit, DoCheck {
  clientOrder: Order[];
  exist: boolean ;
  client!: Client;
  messageOrders: string;
  switchAuth:boolean = false;
  messagePreOrder:string;
  // @ViewChild('auth') viewChild: ElementRef;


  constructor(private clientServer: ClientPersoService, private authService: AuthService, private preOrderService: PreOrderService) { }

  ngDoCheck(): void {
    this.messagePreOrder = AuthService.messagePreOrder;
    //console.log(PreOrderService.order);
    //console.log(AuthService.messagePreOrder);

  }

  ngOnInit(): void {
    this.client = AuthService.client;
    this.exist = AuthService.exist;
  }

  getClientOrders(){

    this.clientServer.getOrderClient(this.client.username).subscribe(result => {this.clientOrder = result;
    this.controlOrders();
    AuthService.clientOrder = this.clientOrder});
  }

  controlOrders(){
    if(this.clientOrder.length == 0){
      this.messageOrders = 'You don\'t have any orders';
    }
  }

  setClientAndExist(transferInformationClient:{ client:Client, exist:boolean}) {
    this.client = transferInformationClient.client;
    this.exist = transferInformationClient.exist;
  }

  getAuth() {
    this.switchAuth = !this.switchAuth;
  }

  logOut() {
    this.exist = !this.exist;
    //AuthService.client;
    AuthService.exist = this.exist;
  }
}
