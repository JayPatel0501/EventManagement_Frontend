import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  loginUserForm=new FormGroup({
    UserEmail:new FormControl(),
    UserPassword:new FormControl()
  })

  public constructor(private router:Router,private userService:UserService){

  }
  NavigateToRegister(){
    this.router.navigate(["register"]);
  }
  OnSubmit(){
    console.log(this.loginUserForm.value)
    let user=new User();
    user.UserEmail = this.loginUserForm.controls["UserEmail"].value;
    user.UserPassword=this.loginUserForm.controls["UserPassword"].value
    this.userService.login(user).subscribe((response)=>{
      console.log(response)

      if(response["ArrayOfResponse"].length>0){
        this.router.navigate(["dashboard"]);
      }
    },
  (error)=>{
    console.log(error)
  })
  }

}
