import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './UserComponents/user-login/user-login.component';
import { DashBoardComponent } from './DashboardComponents/dash-board/dash-board.component';
import { UserRegisterComponent } from './UserComponents/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EventComponent } from './event/event.component';
import { AddEnventComponent } from './event/add-envent/add-envent.component';
import { EventInfoComponent } from './event/event-info/event-info.component'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DashBoardComponent,
    UserRegisterComponent,
    EventComponent,
    AddEnventComponent,
    EventInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
