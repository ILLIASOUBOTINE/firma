import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../enttity/client";
import {ClientPersoService} from "../service/client-perso.service";
import {AuthService} from "../service/auth.service";
import {PreOrderService} from "../service/pre-order.service";

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
  exist:boolean;
  @Output('singIn') setTransferInformationClient = new EventEmitter<transferInformationClient>();




  constructor(private clientService : ClientPersoService, private authService: AuthService, private preOrderService: PreOrderService) { }

  ngOnInit(): void {
    this.exist = AuthService.exist;
    //this.authService.exist$.subscribe((e)=>{this.getExistByAuthService(e);})
  }

  getExistByAuthService(e:boolean){
    this.exist = e;
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
        AuthService.exist = this.exist;
        AuthService.client = this.client;
       // this.authService.exist$.next(this.exist);
          this.fooo();
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

  fooo() {
    if(PreOrderService.order != undefined && AuthService.client != undefined){
      this.preOrderService.saveOrder().subscribe((e)=>console.log(e));

    }
    console.log(PreOrderService.order);
    console.log(AuthService.client);
    //this.preOrderService.saveOrder().subscribe((e)=>console.log(e));
  }

}
