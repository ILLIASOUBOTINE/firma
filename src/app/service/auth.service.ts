import { Injectable } from '@angular/core';
import {Auth} from "../enttity/auth";
import {Subject} from "rxjs";
import {Client} from "../enttity/client";
import {Order} from "../enttity/order";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static auth: Auth = new Auth();
  static exist: boolean;
  static client: Client;
  static messagePreOrder: string;
  static clientOrder: Order[];

  public client$ = new Subject<Client>();

  public clientOrder$ = new Subject<Order[]>();


  public exist$ = new Subject<boolean>();
  constructor() { }



}
