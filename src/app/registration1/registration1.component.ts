import {Component, DoCheck, OnInit} from '@angular/core';
import {ClientPersoService} from "../service/client-perso.service";
import {Client} from "../enttity/client";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration1.component.html',
  styleUrls: ['./registration1.component.css']
})
export class Registration1Component implements OnInit, DoCheck{
  newClient: Client;
  form: FormGroup;
  sizeArr:number;
  message:string;
  switch2:boolean = true;

  constructor(public clientPersoService: ClientPersoService) { }

  ngDoCheck(): void {

  }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   lastName: new FormControl(''),
    //   username: new FormControl(''),
    //   password: new FormControl(''),
    //   email: new FormControl(''),
    //   phoneNumber: new FormControl('')
    // });
  }

  saveNewClient() {

    this.newClient = this.form.value;

     this.checkUsername(this.newClient);
  }



  checkUsername(newClient:Client){
    this.clientPersoService.getClientByUsername(this.newClient.username).subscribe((e)=>{this.sizeArr = e.length;
      this.addClients(this.sizeArr);});
  }

  addClients(sizeArr:number){
    console.log(sizeArr);
    if(sizeArr == 0) {
      this.clientPersoService.saveClient(this.newClient).subscribe(e=>{console.log(e)});
      this.message = 'registration completed successfully';
      this.switch2 = false;
    }else {
      this.message = 'User with username: ' + this.newClient.username + ' already exists, change your username';
    }

  }
}
