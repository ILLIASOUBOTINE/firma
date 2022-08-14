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


  constructor(private clientServer: ClientPersoService, private authService: AuthService) { }

  ngAfterViewInit(): void {

    }

  ngOnInit(): void {

  }


  ngDoCheck(): void {


  }







}
