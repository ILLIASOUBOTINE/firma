import { Component, OnInit } from '@angular/core';
import {Client} from "../enttity/client";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  client: Client;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
   // this.authService.client$.subscribe((e)=>{this.setClientFromAuthService(e)});
  }

  // private setClientFromAuthService(e: Client) {
  //   this.client = e;
  // }

}
