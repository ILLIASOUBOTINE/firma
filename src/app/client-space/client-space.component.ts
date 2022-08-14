import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Order} from "../enttity/order";
import {ClientPersoService} from "../service/client-perso.service";
import {AuthService} from "../service/auth.service";
import {OrdersClientComponent} from "../orders-client/orders-client.component";

import {Client} from "../enttity/client";
import {AutentificationComponent} from "../autentification/autentification.component";


@Component({
  selector: 'app-client-space',
  templateUrl: './client-space.component.html',
  styleUrls: ['./client-space.component.css']
})
export class ClientSpaceComponent implements OnInit, DoCheck, AfterViewInit, AfterContentChecked,AfterViewChecked {
  clientOrder: Order[];
  exist: boolean = true;
  client: Client;
  messageOrders: string;
  switchAuth:boolean = false;
  // @ViewChild('auth') viewChild: ElementRef;


  constructor(private clientServer: ClientPersoService, private authService: AuthService) { }

  ngDoCheck(): void {
    // this.authService.client$.subscribe((e)=>this.client = e);
  }

  ngOnInit(): void {}

  ngAfterContentChecked(): void{}

  ngAfterViewInit() {}


   ngAfterViewChecked(): void {}



  getClientOrders(){

    this.clientServer.getOrderClient(this.client.username).subscribe(result => {this.clientOrder = result;
    this.controlOrders();
    });
    //console.log(this.clientOrder);
  }



  controlOrders(){
    this.authService.clientOrder$.next(this.clientOrder);
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


}
