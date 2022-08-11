import {Address} from "./address";
import {Contact} from "./contact";
import {PreOrder} from "./pre-order";


export class Order{
  id?:number;
  numberOrder:number;
  nameClient:string;
  commands:PreOrder[];
  total: number;
  //lastNameClient:string;
  // address?:Address;
  // contacts:Contact;



}
