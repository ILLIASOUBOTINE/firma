import { Component, OnInit } from '@angular/core';
import {RoutingContentService} from "../service/routing-content.service";
import {Client} from "../enttity/client";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  client: Client;
  logo:string = 'Client perso';
  //exist:boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.client$.subscribe((e)=>{this.getClientFromAuthService(e)});
    AuthService.exist = true;
    //this.authService.exist$.next(true);
  }

  private getClientFromAuthService(e: Client) {
    this.client = e;
    this.logo = e.name;
  }

  setSwitch(message: string) {
    RoutingContentService.switch1 = message;

  }

  setExistFromAuthService() {
    // if(this.client == undefined){
    //   this.authService.exist$.next(true);
    // }else {
    //   this.authService.exist$.next(false);
    // }

  }
}
