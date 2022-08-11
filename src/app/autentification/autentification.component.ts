import { Component, OnInit } from '@angular/core';
import {Client} from "../enttity/client";

@Component({
  selector: 'app-autentification',
  templateUrl: './autentification.component.html',
  styleUrls: ['./autentification.component.css']
})
export class AutentificationComponent implements OnInit {
  nameClient: string;
  client: Client;
  clients: Client[] ;
  messageError:string;

  constructor() { }

  ngOnInit(): void {
  }

  // getPagePerso(element: HTMLInputElement) {
  //   this.nameClient = element.value;
  //   this.clientServer.getClientByUsername(this.nameClient).subscribe(result=>{this.clients = result;
  //     this.autentificationClient();
  //     console.log(result)});
  //
  // }
  //
  // autentificationClient(){
  //   if(this.clients.length == 0){
  //     this.messageError = 'incorrect username'
  //   }else {
  //     this.exist = false;
  //     this.client = this.clients[0];
  //   }
  //   console.log(this.client);
  // }

}
