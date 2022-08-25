import { Component, OnInit } from '@angular/core';
import {Client} from "../enttity/client";
import {FormControl, FormGroup} from "@angular/forms";
import {ClientPersoService} from "../service/client-perso.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  client: Client;
  form: FormGroup;
  sizeArr:number;
  message:string;
  switch2:boolean = true;
  updateClient: Client;

  constructor(public clientPersoService: ClientPersoService, private authService: AuthService) { }



  ngOnInit(): void {
    this.client = AuthService.client;

    // this.form = new FormGroup({
    //   name: new FormControl(this.client.name),
    //   lastName: new FormControl(this.client.lastName),
    //   username: new FormControl(this.client.username),
    //   password: new FormControl(this.client.password),
    //   email: new FormControl(this.client.email),
    //   phoneNumber: new FormControl(this.client.phoneNumber)
    // });
  }

  saveModification() {
    this.updateClient = this.form.value;
    this.checkUsername(this.updateClient);
    console.log(this.client.id);
  }

  checkUsername(updateClient:Client){
    this.clientPersoService.getClientByUsername(this.updateClient.username).subscribe((e)=>{this.sizeArr = e.length;
      this.upDateClient(this.sizeArr);});
  }

  upDateClient(sizeArr:number){

    if(sizeArr == 0) {
      this.clientPersoService.updateClient(this.updateClient, this.client.id).subscribe(e => {console.log(e)});
      this.message = 'update completed successfully';
      AuthService.client = this.updateClient;
      this.authService.client$.next(this.updateClient);
      this.switch2 = false;
    }else {
      this.message = 'User with username: ' + this.updateClient.username + ' already exists, change your username';
    }

  }



}
