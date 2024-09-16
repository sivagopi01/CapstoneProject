import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HabitComponent } from './habit/habit.component';
import { ManageHabitComponent } from './habit/manage-habit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const childRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'habit',
    component: HabitComponent,
  },
  {
    path: 'managehabit/:id',
    component: ManageHabitComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: childRoutes
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'register/:id',
    component: RegisterComponent,
  },
  {
    path: 'forgotPwd',
    component: ForgotpasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
