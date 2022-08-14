import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../enttity/client";
import {ClientPersoService} from "../service/client-perso.service";
import {AuthService} from "../service/auth.service";

export interface transferInformationClient{
  client:Client;
  exist:boolean;
}

@Component({
  selector: 'app-autentification',
  templateUrl: './autentification.component.html',
  styleUrls: ['./autentification.component.css']
})
export class AutentificationComponent implements OnInit {
  messageError:string;
  clients: Client[];
  username: string;
  password:string;
  //transferInformationClient:transferInformationClient;
  client: Client;
  exist:boolean = true;
  @Output('singIn') setTransferInformationClient = new EventEmitter<transferInformationClient>();




  constructor(private clientService : ClientPersoService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  getPagePerso(elementUsername: HTMLInputElement, elementPassword: HTMLInputElement,) {
    this.username = elementUsername.value;
    this.password = elementPassword.value;
    this.clientService.getClientByUsername(this.username).subscribe(result=>{this.clients = result;
      this.autentificationClient();});

  }

  autentificationClient(){
    if(this.clients.length == 0){
      this.messageError = 'incorrect username or password';
    }else {
      this.client = this.clients[0];
      if(this.client.password == this.password){
        this.authService.client$.next(this.client);
        this.exist = false;
        this.setTransferInformationClient.emit({client: this.client, exist:this.exist});

        AuthService.auth.username = this.client.username;
        AuthService.auth.password = this.client.password;
        AuthService.auth.activ = true;
        console.log(AuthService.auth);

      }else {
        this.messageError = 'incorrect username or password';
      }


    }
    //console.log(this.client);
  }

}
