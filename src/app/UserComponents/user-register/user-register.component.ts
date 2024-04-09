import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/Models/User';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  registrationForm=new FormGroup({
   
    UserName:new FormControl(),
    UserAddress:new FormControl(),
    UserEmail:new FormControl(),
    UserPassword:new FormControl(),
    UserMobile:new FormControl(),

  });
  OnSubmit(){
    console.log(this.registrationForm.value)
     let user=new User();
     user.UserName=this.registrationForm.controls["UserName"].value
     user.UserAddress=this.registrationForm.controls["UserAddress"].value
     user.UserEmail=this.registrationForm.controls["UserEmail"].value
     user.UserPassword=this.registrationForm.controls["UserPassword"].value
     user.UserMobile=this.registrationForm.controls["UserMobile"].value
     
  }
   public constructor(private router:Router){
       
   }

    NavigateToLogin(){
      this.router.navigate(['login']);
   }
}
