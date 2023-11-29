import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{
  public myForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService){
   this.buildForm();
  }


  // public register(){
  //   const user = this.myForm.value;
  //   console.log(user);
  // }
  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      name: [,Validators.required],
      last_name:[,Validators.required],
      email: [,[Validators.required, Validators.email]],
      photo:"",
      password: [,[Validators.required, Validators.minLength(minPassLength)]],
      repit_Password: [,[Validators.required, this.passwordMatchValidator]]
    });
  }
  public passwordMatchValidator(control:AbstractControl){
    let result = {noCoincide: true}
    if (control.parent?.value.password === control.value) result = null
    return result
  }

  registrarse(){
    const user = this.myForm.value;
  let nuevoUsuario:User =  new User (0,user.name, user.last_name, user.email, user.photo, user.password)

  console.log(nuevoUsuario);
  
    this.usuarioService.register(nuevoUsuario).subscribe(
      (response) => {
        console.log(response);
        
       this.usuarioService.user = nuevoUsuario;

       console.log(nuevoUsuario);
       
        // Puedes realizar acciones adicionales después del registro, si es necesario
      },
      (error) => {
        console.error('Error al registrar el usuario', error);
        // Puedes manejar el error de acuerdo a tus necesidades
      }
    );
  }

  ngOnInit(): void {
    
  }
}


