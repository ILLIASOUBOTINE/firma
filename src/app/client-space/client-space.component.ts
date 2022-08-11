import {Component, DoCheck, OnInit} from '@angular/core';
import {Order} from "../enttity/order";
import {ClientPersoService} from "../service/client-perso.service";

import {Client} from "../enttity/client";


@Component({
  selector: 'app-client-space',
  templateUrl: './client-space.component.html',
  styleUrls: ['./client-space.component.css']
})
export class ClientSpaceComponent implements OnInit, DoCheck {
  clientOrder: Order[];
  exist: boolean = true;
  nameClient: string;
  client: Client;
  clients: Client[] ;
  messageError:string;
  messageOrders: string;

  constructor(private clientServer: ClientPersoService) { }

  ngDoCheck(): void {

    }

  ngOnInit(): void {

  }

  getPagePerso(element: HTMLInputElement) {
    this.nameClient = element.value;
    this.clientServer.getClientByUsername(this.nameClient).subscribe(result=>{this.clients = result;
    this.autentificationClient();
    console.log(result)});

  }

  getClientOrders(){
    this.clientServer.getOrderClient(this.nameClient).subscribe(result => {this.clientOrder = result;
    this.controlOrders();});
    console.log(this.clientOrder);
  }

  autentificationClient(){
    if(this.clients.length == 0){
      this.messageError = 'incorrect username'
    }else {
      this.exist = false;
      this.client = this.clients[0];
    }
    console.log(this.client);
  }

  controlOrders(){
    if(this.clientOrder.length == 0){
      this.messageOrders = 'You don\'t have any orders';
    }

  }

}
