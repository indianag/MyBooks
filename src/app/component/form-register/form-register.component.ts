import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{
  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
   this.buildForm();
  }


  public register(){
    const user = this.myForm.value;
    console.log(user);
  }
  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      name: [,Validators.required],
      surname:[,Validators.required],
      email: [,[Validators.required, Validators.email]],
      url:"",
      password: [,[Validators.required, Validators.minLength(minPassLength)]],
      repit_Password: [,[Validators.required, this.passwordMatchValidator]]
    });
  }
  public passwordMatchValidator(control:AbstractControl){
    let result = {noCoincide: true}
    if (control.parent?.value.password === control.value) result = null
    return result
  }
  ngOnInit(): void {
    
  }
}


