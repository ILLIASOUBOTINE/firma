import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../enttity/order";
import {ClientPersoService} from "../service/client-perso.service";
import {Client} from "../enttity/client";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input()
  order: Order;

  constructor(private clientServer: ClientPersoService) { }

  ngOnInit(): void {
  }



}
