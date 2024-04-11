import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  constructor(private router:Router){
   
  }
  role!:string;
  OnLogout(){
        sessionStorage.setItem("isLogin","flase")
        this.router.navigate(["login"]);
  }
  OnLogin(){
    // sessionStorage.setItem("isLogin","flase")
    this.router.navigate(["login"]);
}

}
