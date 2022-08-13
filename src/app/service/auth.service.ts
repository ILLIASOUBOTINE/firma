import { Injectable } from '@angular/core';
import {Auth} from "../enttity/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static auth: Auth;
  constructor() { }
}
