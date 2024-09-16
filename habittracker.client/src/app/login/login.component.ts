import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HabitService } from '../services/habit.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isErrorShow: boolean = false;
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  });

  constructor(private router: Router, public habitService: HabitService) {

  }

  onLogin() {
    this.habitService.login(this.loginForm.value).subscribe(
      {
        next: (user) => {
          this.habitService.saveUserInLocal(user);
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          this.isErrorShow = true;
        }
      }
    );
  }
  register() {
    this.router.navigateByUrl('/register');
  }
  forgotPwd() {
    this.router.navigateByUrl('/forgotPwd');
  }

}
