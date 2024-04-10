import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './DashboardComponents/dash-board/dash-board.component';
import { UserLoginComponent } from './UserComponents/user-login/user-login.component';
import { UserRegisterComponent } from './UserComponents/user-register/user-register.component';
import { EventComponent } from './event/event.component';
import { AddEnventComponent } from './event/add-envent/add-envent.component';
import { EventInfo } from 'src/Models/EventInfo';
import { EventInfoComponent } from './event/event-info/event-info.component';

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
  },
  {
    path:'events',
    component:EventComponent
  },
  {
    path:'event/:id',
    component:EventInfoComponent
  },
  {
    path:'addevent',
    component:AddEnventComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
