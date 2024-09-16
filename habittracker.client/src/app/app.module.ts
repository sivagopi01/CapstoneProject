import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HabitComponent } from './habit/habit.component';
import { ManageHabitComponent } from './habit/manage-habit.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    HabitComponent,
    ManageHabitComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FullCalendarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
