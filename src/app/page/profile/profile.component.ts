import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
 
  public myUser: User;

  constructor(){
    this.myUser = new User(1991, "indiana", "granado", "indi@gmail", "url", "oddi")
  }

  public nombreCompleto():string{
    return this.myUser.nombreCompleto();
  }

  enviar(nuevoNombre: HTMLInputElement){
    console.log(this.myUser.name);
    this.myUser.name = nuevoNombre.value;
    console.log(this.myUser.name);

    console.log(this.myUser.last_name);
    this.myUser.last_name = nuevoNombre.value;
    console.log(this.myUser.last_name);

    console.log(this.myUser.email);
    this.myUser.email = nuevoNombre.value;
    console.log(this.myUser.email);
  }

ngOnInit(): void {
  
}

}
