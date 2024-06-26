import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/Models/Admin';
import { ResponseMessage } from 'src/Models/ResponseMessage';
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
    UserEmail:new FormControl("",[Validators.required]),
    UserPassword:new FormControl("",[Validators.required]),
    Role:new FormControl('User',[Validators.required])
  })

  responseMessage=new ResponseMessage()

  public constructor(private router:Router,private userService:UserService,private adminService:AdminService){

  }
  NavigateToRegister(){
    this.router.navigate(["register"]);
  }
  RoleClick(){

  }
  OnSubmit(){
    debugger
    if(this.loginUserForm.valid)
      {
    if(this.loginUserForm.controls["Role"].value=="User"){
      console.log(this.loginUserForm.value)
    let user=new User();
    user.UserEmail = this.loginUserForm.value.UserEmail || "";
    user.UserPassword =this.loginUserForm.value.UserPassword||"";
    this.userService.login(user).subscribe((response)=>{
      console.log(response)
        debugger
      if(response["ArrayOfResponse"].length>0){
        if(response.Message=="200|Data Found"){
          this.responseMessage.Message="login success Fully"
          this.responseMessage.StatusCode=200

        }else{
          this.responseMessage.Message=response.Message
          this.responseMessage.StatusCode=500
          console.log(this.responseMessage)
        }
        sessionStorage.setItem("isUserLogin",'true')
        sessionStorage.setItem("isAdminLogin",'false')
        this.router.navigateByUrl("/dashboard/allPublishedEvents")
        // this.router.navigate(["dashboard/allevents"])
      }
      else{
        this.responseMessage.Message=response.Message
        this.responseMessage.StatusCode=500

        console.log(this.responseMessage)
      }
      setTimeout(() => {
        this.responseMessage.Message="Null"
        this.responseMessage.StatusCode=0
        // this.router.navigate(["dashboard/allevents"])
      }, 1000);



    },
  (error)=>{
    console.log(error)
  })
  }


    else if(this.loginUserForm.controls["Role"].value=="Admin"){

      console.log(this.loginUserForm.value)
    let admin=new Admin();
    admin.AdminEmail != this.loginUserForm.controls["UserEmail"].value;
    admin.AdminPassword!=this.loginUserForm.controls["UserPassword"].value
    this.adminService.login(admin).subscribe((response)=>{
      console.log(response)
      let adminId=response["ArrayOfResponse"][0].AdminId.toString()

      if(response["ArrayOfResponse"].length>0){
        if(response.Message=="200|Data Found"){
          this.responseMessage.Message="login success Fully"
          this.responseMessage.StatusCode=200

        }else{
          this.responseMessage.Message=response.Message
          this.responseMessage.StatusCode=500
          console.log(this.responseMessage)
        }
        sessionStorage.setItem("isAdminLogin",'true')
        sessionStorage.setItem("AdminId",adminId)
        // console.log(sessionStorage.getItem("AdminId"))
        sessionStorage.setItem("isUserLogin",'false')
        this.router.navigateByUrl("/dashboard/allevents")
        // this.router.navigate(["dashboard/allevents"])
      }
      else{
        this.responseMessage.Message=response.Message
        this.responseMessage.StatusCode=500

        console.log(this.responseMessage)
      }
      setTimeout(() => {
        this.responseMessage.Message="Null"
        this.responseMessage.StatusCode=0
        // this.router.navigate(["dashboard/allevents"])
      }, 1000);

    },
  (error)=>{
    console.log(error)
  })
  }
    }
  
  else{
    return 
  }
  }
}
