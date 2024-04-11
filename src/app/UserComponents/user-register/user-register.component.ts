import { Expansion } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Admin } from 'src/Models/Admin';
import { ResponseMessage } from 'src/Models/ResponseMessage';
import { User } from 'src/Models/User';
import { AdminService } from 'src/app/Services/services/admin.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  responseMessage = new ResponseMessage();

  registrationForm = new FormGroup({
    UserName: new FormControl(),
    UserAddress: new FormControl(),
    UserEmail: new FormControl(),
    UserPassword: new FormControl(),
    UserMobile: new FormControl(),
    Role:new FormControl(),
  });
  OnSubmit() {
    if(this.registrationForm.controls["Role"].value=="User"){
    console.log(this.registrationForm.value);
    let user = new User();
    user.UserName = this.registrationForm.controls['UserName'].value;
    user.UserAddress = this.registrationForm.controls['UserAddress'].value;
    user.UserEmail = this.registrationForm.controls['UserEmail'].value;
    user.UserPassword = this.registrationForm.controls['UserPassword'].value;
    user.UserMobile = this.registrationForm.controls['UserMobile'].value;


    let res = this.userService.register(user).subscribe(
      (response) => {
        console.log(response);
        if(response.Message=="User Inserted Successfully"){

            this.responseMessage.Message="login success Fully"
            this.responseMessage.StatusCode=200



        }
        else{
          this.responseMessage.Message=response.Message
          this.responseMessage.StatusCode=500

          console.log(this.responseMessage)
        }
        setTimeout(() => {
          this.responseMessage.Message="Null"
          this.responseMessage.StatusCode=0
        }, 1000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  if(this.registrationForm.controls["Role"].value=="Admin"){
    console.log(this.registrationForm.value);
    let admin = new Admin();
    admin.AdminName = this.registrationForm.controls['UserName'].value;
    admin.AdminAddress = this.registrationForm.controls['UserAddress'].value;
    admin.AdminEmail = this.registrationForm.controls['UserEmail'].value;
    admin.AdminPassword = this.registrationForm.controls['UserPassword'].value;
    admin.AdminMobile = this.registrationForm.controls['UserMobile'].value;
    let abc = document.getElementById(
      'ResponseMessageId'
    ) as HTMLInputElement | null;
    let demo=document.getElementById("ResponseMessageId")?.style.display;

    let res = this.adminService.register(admin).subscribe(
      (response) => {
        console.log(response);
        if (response['ID'] == 200 && abc !== null) {
          this.responseMessage.Message = response['Message'];
          this.responseMessage.StatusCode = response['ID'];

          // Store abc in a local variable where it's guaranteed to be not null
          const abcElement = abc as HTMLElement;

          abcElement.style.display = 'block';

          // Use abcElement inside setTimeout
          setTimeout(() => {
            if (abcElement) {
              abcElement.style.display = 'none';
              this.router.navigate(["login"]);
            }
          }, 1000);
        }

        console.log(this.responseMessage.StatusCode);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  }
  public constructor(
    private router: Router,
    private userService: UserService,
    private adminService: AdminService
  ) {}

  NavigateToLogin() {
    this.router.navigate(['login']);
  }
}
