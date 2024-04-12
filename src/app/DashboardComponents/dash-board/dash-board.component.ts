import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  constructor(private router:Router){
     if(sessionStorage.getItem("isUserLogin")=='true'){
      this.role="User"
     }
     else if(sessionStorage.getItem("isAdminLogin")=='true'){
      this.role="Admin"
     }
  }
  role!:string;
  OnGoDashBoardEvents(){
    if( this.role=="Admin"){
      this.router.navigate(["dashboard/allevents"])
    }
    if( this.role=="User"){
      this.router.navigate(["dashboard/allPublishedEvents"])
    }
    
  }
  
  OnGoAddEvents(){

    this.router.navigate(["dashboard/admin/addevent"])

  }

  OnGoUnPublishEvents(){
    this.router.navigate(["dashboard/admin/unPublishEvent"])
  }

  OnLogout(){
        sessionStorage.setItem("isLogin","flase")
        this.router.navigate(["login"]);
  }
  OnLogin(){
    // sessionStorage.setItem("isLogin","flase")
    this.router.navigate(["login"]);
}

}
