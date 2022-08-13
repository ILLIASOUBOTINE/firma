import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../enttity/client";
import {ClientPersoService} from "../service/client-perso.service";

@Component({
  selector: 'app-autentification',
  templateUrl: './autentification.component.html',
  styleUrls: ['./autentification.component.css']
})
export class AutentificationComponent implements OnInit {
  messageError:string;
  clients: Client[];
  username: string;

  client: Client;
  exist:boolean = true;



  constructor(private clientService : ClientPersoService) { }

  ngOnInit(): void {
  }

  getPagePerso(element: HTMLInputElement) {
    this.username = element.value;
    this.clientService.getClientByUsername(this.username).subscribe(result=>{this.clients = result;
      this.autentificationClient();});

  }

  autentificationClient(){
    if(this.clients.length == 0){
      this.messageError = 'incorrect username'
    }else {
      this.exist = false;
      this.client = this.clients[0];
    }
    //console.log(this.client);
  }

}
