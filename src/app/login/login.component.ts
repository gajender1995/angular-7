import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray 
} from "@angular/forms";

import {  LoginService } from './login.service';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  language : String[] = ['English','German','Hindi']; 
  //profileForm : FormGroup; 
  profileForm =  this.fb.group({
    firstName : ['', Validators.required],
    lastName: [''],
    address : this.fb.group({
      street : [''],
      city : ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
 
  
  constructor(private fb : FormBuilder , private loginService : LoginService) { }
  
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  datas = this.loginService.getData().subscribe( res => {
    console.log("Jonu here ")
    console.log(res);
    //full address
    console.log(res[0].fullAddress());
  });

  ngOnInit() {
    //console.log(this.profileForm);
    // this.profileForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   address : new FormGroup({
    //     street : new FormControl(),
    //     city : new FormControl()
    //   })
    // });
  }

  onSubmit() {
    
    console.warn(this.profileForm.value);
    return this.profileForm;
  }
}
