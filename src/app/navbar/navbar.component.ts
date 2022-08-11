import { Component, OnInit } from '@angular/core';
import {RoutingContentService} from "../service/routing-content.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setSwitch(message: string) {
    RoutingContentService.switch1 = message;

  }

}
