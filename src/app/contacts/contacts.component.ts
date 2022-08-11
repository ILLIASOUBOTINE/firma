import { Component, OnInit } from '@angular/core';
import {RoutingContentService} from "../service/routing-content.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  switch1:string;
  constructor() { }

  ngOnInit(): void {

  }


  setSwitch(message: string) {
    RoutingContentService.switch1 = message;
  }
}
