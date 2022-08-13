import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild
} from '@angular/core';
import {Order} from "../enttity/order";
import {ClientPersoService} from "../service/client-perso.service";

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
 username: string;
  client: Client;
  clients: Client[] ;
  messageError:string;
  messageOrders: string;

  @ViewChild(AutentificationComponent)
  viewChild: AutentificationComponent;

  constructor(private clientServer: ClientPersoService) { }

  ngDoCheck(): void {

  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void{

  }

  ngAfterViewInit() {
    console.log(this.viewChild);
    //  this.client = this.viewChild.client;
    //  this.exist = this.viewChild.exist;
    // console.log(this.viewChild.client);
    // console.log(this.client);
    // console.log(this.exist);
  }

  // getPagePerso(element: HTMLInputElement) {
  //   this.nameClient = element.value;
  //   this.clientServer.getClientByUsername(this.nameClient).subscribe(result=>{this.clients = result;
  //   this.autentificationClient();
  //   console.log(result)});
  //
  // }
   ngAfterViewChecked(): void {
     if(!this.viewChild.exist){
       console.log(this.viewChild);
       this.client = this.viewChild.client;
       this.exist = this.viewChild.exist;
       console.log(this.viewChild.client);
       console.log(this.client);
       console.log(this.exist);
     }
  }



  getClientOrders(){
    this.clientServer.getOrderClient(this.client.username).subscribe(result => {this.clientOrder = result;
    this.controlOrders();});
    //console.log(this.clientOrder);
  }

  // autentificationClient(){
  //   if(this.clients.length == 0){
  //     this.messageError = 'incorrect username'
  //   }else {
  //     this.exist = false;
  //     this.client = this.clients[0];
  //   }
  //   console.log(this.client);
  // }

  controlOrders(){
    if(this.clientOrder.length == 0){
      this.messageOrders = 'You don\'t have any orders';
    }

  }


}
