import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{
  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
   
  }
  public register(){
    const user = this.myForm.value;
    console.log(user);
  }
  private buldForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      name: [,Validators.required],
      surname:[,Validators.required],
      email: [,[Validators.required, Validators.email]],
      url:"",
      password: [,[Validators.required, Validators.minLength(minPassLength)]],
      repit_password: [,[Validators.required, Validators.minLength(minPassLength)]],

    })
  }
  ngOnInit(): void {
    
  }
}
