import { Injectable} from '@angular/core';
import {PreOrder} from "../enttity/pre-order";
import {HttpClient} from "@angular/common/http";
import {Order} from "../enttity/order";
import {Observable} from "rxjs";
import {Client} from "../enttity/client";

@Injectable({
  providedIn: 'root'
})
export class ClientPersoService {

  constructor(private http: HttpClient) { }


  getOrderClient(usernameClient: string):Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:3000/orders?nameClient=' + usernameClient);
  }

  getClientByUsername(usernameClient: string):Observable<Client[]>{
    return this.http.get<Client[]>('http://localhost:3000/clients?username='+ usernameClient);
  }

  saveClient(newClient:Client){
    return this.http.post('http://localhost:3000/clients', newClient);
  }


}
