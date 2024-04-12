import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './DashboardComponents/dash-board/dash-board.component';
import { UserLoginComponent } from './UserComponents/user-login/user-login.component';
import { UserRegisterComponent } from './UserComponents/user-register/user-register.component';
import { EventComponent } from './event/event.component';
import { AddEnventComponent } from './event/add-envent/add-envent.component';
import { EventInfo } from 'src/Models/EventInfo';
import { EventInfoComponent } from './event/event-info/event-info.component';
import { AuthGuard } from './guards/auth.guard';
import { AllEventsComponent } from './all-events/all-events.component';
import { AdmingardGuard } from './guards/admingard.guard';
import { AllPublishedEventsComponent } from './all-published-events/all-published-events.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashBoardComponent,
    children:[
        {
          path:'events',
          component:EventComponent,
          canActivate:[AdmingardGuard]
        },
        {
          path:'allevents',
          component:AllEventsComponent,
          canActivate:[AdmingardGuard]

        },
        {
          path:'allPublishedEvents',
          component:AllPublishedEventsComponent,
          canActivate:[AuthGuard]

        },
        {
          path:'admin/event/:id',
          component:EventInfoComponent,
          // canActivate:[AdmingardGuard]
        },
        {
          path:'admin/addevent',
          component:AddEnventComponent,
          canActivate:[AdmingardGuard]
        },
        {
          path:'admin/showAll',
          component:AddEnventComponent,
          canActivate:[AdmingardGuard]
        },

    ]
  },

  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'register',
    component:UserRegisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
