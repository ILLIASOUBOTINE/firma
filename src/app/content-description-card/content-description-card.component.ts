import {Component, DoCheck, OnInit} from '@angular/core';
import {CaruselService} from "../service/carusel.service";
import {DescriptionCard} from "../enttity/descriptionCard";
import {TableDescriptionCards} from "../models/tableDescriptionCards";

@Component({
  selector: 'app-content-description-card',
  templateUrl: './content-description-card.component.html',
  styleUrls: ['./content-description-card.component.css']
})
export class ContentDescriptionCardComponent implements OnInit,DoCheck {

  card: DescriptionCard;


  constructor(public service:CaruselService) { }

  ngOnInit(): void {
  }

  ngDoCheck():void{
    this.card = CaruselService.card;
    console.log(this.card.title)
  }




}
