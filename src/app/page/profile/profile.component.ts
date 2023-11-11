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

  enviar(nuevoNombre: HTMLInputElement,nuevoApp:HTMLInputElement, email:HTMLInputElement, url:HTMLInputElement){

    this.myUser.name = nuevoNombre.value;
    this.myUser.last_name = nuevoApp.value;
    this.myUser.email = email.value;
    this.myUser.photo = url.value;
    console.log(this.myUser);
    
  
  }

ngOnInit(): void {
  
}

}
