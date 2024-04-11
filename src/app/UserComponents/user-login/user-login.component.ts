import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/Models/Admin';
import { User } from 'src/Models/User';
import { AdminService } from 'src/app/Services/services/admin.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  loginUserForm=new FormGroup({
    UserEmail:new FormControl(),
    UserPassword:new FormControl(),
    Role:new FormControl()
  })

  public constructor(private router:Router,private userService:UserService,private adminService:AdminService){

  }
  NavigateToRegister(){
    this.router.navigate(["register"]);
  }
  RoleClick(){
    
  }
  OnSubmit(){
    if(this.loginUserForm.controls["Role"].value=="User"){
      console.log(this.loginUserForm.value)
    let user=new User();
    user.UserEmail = this.loginUserForm.controls["UserEmail"].value;
    user.UserPassword=this.loginUserForm.controls["UserPassword"].value
    this.userService.login(user).subscribe((response)=>{
      console.log(response)

      if(response["ArrayOfResponse"].length>0){
        sessionStorage.setItem("isUserLogin",'true')
        sessionStorage.setItem("isAdminLogin",'false')
        // this.router.navigate(["dashboard"]);
      }
     
    },
  (error)=>{
    console.log(error)
  })
  }
    

    else if(this.loginUserForm.controls["Role"].value=="Admin"){
      console.log(this.loginUserForm.value)
    let admin=new Admin();
    admin.AdminEmail = this.loginUserForm.controls["UserEmail"].value;
    admin.AdminPassword=this.loginUserForm.controls["UserPassword"].value
    this.adminService.login(admin).subscribe((response)=>{
      console.log(response)

      if(response["ArrayOfResponse"].length>0){
        sessionStorage.setItem("isAdminLogin",'true')
        sessionStorage.setItem("isUserLogin",'false')
    
      }
     
    },
  (error)=>{
    console.log(error)
  })
  }
    }
    

}
