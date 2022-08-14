import {AfterViewInit, Component, DoCheck, Input, OnInit} from '@angular/core';
import {ClientPersoService} from "../service/client-perso.service";
import {Order} from "../enttity/order";
import {Client} from "../enttity/client";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-orders-client',
  templateUrl: './orders-client.component.html',
  styleUrls: ['./orders-client.component.css']
})
export class OrdersClientComponent implements OnInit, DoCheck,  AfterViewInit {
  clientOrder: Order[];

   client: Client;
  messageOrders: string = 'you don`t have any orders';
  constructor(private clientServer: ClientPersoService, private authService: AuthService) { }

  ngAfterViewInit(): void {

    }

  ngOnInit(): void {
    this.authService.clientOrder$.subscribe((clientOrder)=>this.rest(clientOrder));
  }


  ngDoCheck(): void {
    // this.authService.client$.subscribe((client)=>{this.client = client;});
    // console.log(this.client);
    //this.authService.clientOrder$.subscribe((clientOrder)=>{this.clientOrder = clientOrder;});
    console.log(this.clientOrder);
  }

  rest(r: Order[]){
    this.clientOrder = r;
  }

  // getClientOrders(){
  //   this.clientServer.getOrderClient(this.client.username).subscribe(result => {this.clientOrder = result;
  //   this.controlOrders();});
  //   //console.log(this.clientOrder);
  // }
  //
  //
  //
  // controlOrders(){
  //   if(this.clientOrder.length == 0){
  //     this.messageOrders = 'You don\'t have any orders';
  //   }
  //
  // }




}
