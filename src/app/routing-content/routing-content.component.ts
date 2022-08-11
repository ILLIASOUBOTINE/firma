import { Component, OnInit, DoCheck } from '@angular/core';
import {RoutingContentService} from "../service/routing-content.service";

@Component({
  selector: 'app-routing-content',
  templateUrl: './routing-content.component.html',
  styleUrls: ['./routing-content.component.css']
})
export class RoutingContentComponent implements OnInit, DoCheck {
  switch1: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngDoCheck(): void{
   this.setSwitch1();
  }

  setSwitch1(){
    this.switch1 = RoutingContentService.switch1;

  }
}
