import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      password: ['',[Validators.required, Validators.minLength(minPassLength)]],
      repit_Password: ['',[Validators.required]]
    }, { Validators: this.passwordMatchValidator});
  }
  passwordMatchValidator(g:FormGroup){
    return g.get('password').value === g.get('repit_Password').value ? null : {'mismatch': true};
  }
  ngOnInit(): void {
    
  }
}


