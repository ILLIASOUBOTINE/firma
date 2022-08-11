import { Injectable } from '@angular/core';
import {TableDescriptionCards} from "../models/tableDescriptionCards";
import {DescriptionCard} from "../enttity/descriptionCard";

@Injectable({
  providedIn: 'root'
})
export class CaruselService {
 static card:DescriptionCard = TableDescriptionCards[0];

  constructor() { }

  static setCard(name:string){
    for (let card of TableDescriptionCards){
      if(card.title == name){
        CaruselService.card = card;
        break;
      }
    }

  }

}
