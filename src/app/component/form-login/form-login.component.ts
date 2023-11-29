import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{
  public user:User


  constructor(private usuarioService: UsuarioService,
              private router: Router){
  
                this.user = new User (0,"","","","","")
  }

  onSubmit(form:NgForm) {
    // console.log(form.value);
    // console.log(this.login);

    // Llamar al servicio de usuario para iniciar sesión
    this.usuarioService.loginpost(this.user).subscribe(
      (response) => {
        // Datos de inicio de sesión correctos
        this.usuarioService.logueado = true;
        this.usuarioService.user = response;
        console.log(response)
        console.log( this.usuarioService.user);
       
        // Redireccionar a la página de libros
        this.router.navigate(['/books']);
      },
      (error) => {
        // Datos de inicio de sesión incorrectos
        console.error('Error al iniciar sesión', error);
      }
    );
  }


 


  ngOnInit(): void {
    
  }
}
