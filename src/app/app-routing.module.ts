import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './DashboardComponents/dash-board/dash-board.component';
import { UserLoginComponent } from './UserComponents/user-login/user-login.component';
import { UserRegisterComponent } from './UserComponents/user-register/user-register.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashBoardComponent
  },
  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'register',
    component:UserRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }