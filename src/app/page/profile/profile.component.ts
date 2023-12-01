import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BooksService } from 'src/app/shared/books.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
 
  public myUser: User;

  constructor(private userService: UsuarioService,
              private bookService: BooksService){
     this.myUser = this.userService.user;

  }

  public nombreCompleto():string{
    return this.myUser.name + " " + this.myUser.last_name
  }

  enviar(nuevoNombre: HTMLInputElement,nuevoApp:HTMLInputElement, email:HTMLInputElement, url:HTMLInputElement){
    if (this.myUser) {
      this.myUser.name = nuevoNombre.value;
      this.myUser.last_name = nuevoApp.value;
      this.myUser.email = email.value;
      this.myUser.photo = url.value;

      // Llamamos a un método en el UsuarioService para actualizar los datos del usuario
      this.userService.updateUser(this.myUser).subscribe(
        (resp) => {
          console.log('Datos del usuario actualizados correctamente:', resp);
        },
        (error) => {
          console.error('Error al actualizar datos del usuario:', error);
        }
      );
    }
  }

ngOnInit(): void {
  // this.bookService.getAll(this.userService.user.Id_user).subscribe(
  //   (user: User) => {
  //     this.myUser = user;
  //   },
  //   (error) => {
  //     console.error('Error al obtener datos del usuario:', error);
  //   }
  // );
}

}



















 
  // public myUser: User;

  // constructor(private userService: UsuarioService){
  //   this.myUser = new User(1991, "indiana", "granado", "indi@gmail", "url", "oddi")
  // }

  // public nombreCompleto():string{
  //   return this.myUser.nombreCompleto();
  // }

  // enviar(nuevoNombre: HTMLInputElement,nuevoApp:HTMLInputElement, email:HTMLInputElement, url:HTMLInputElement){

  //   this.myUser.name = nuevoNombre.value;
  //   this.myUser.last_name = nuevoApp.value;
  //   this.myUser.email = email.value;
  //   this.myUser.photo = url.value;
  //   console.log(this.myUser);