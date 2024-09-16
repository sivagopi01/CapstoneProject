import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitService } from '../services/habit.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  id: number = 0;
  registerForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    fathersName: new FormControl(''),
    gender: new FormControl('', Validators.required),
    mobileNumber: new FormControl(''),
    password: new FormControl('', Validators.required),
  });
  constructor(public router: Router,
    public activateRoute: ActivatedRoute,
    public habitService: HabitService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = parseInt(params['id']);
      if (this.id > 0) {
        this.habitService.getUser(this.id).subscribe(user => {
          this.registerForm.get('id')?.setValue(user.id);
          this.registerForm.get('firstName')?.setValue(user.firstName);
          this.registerForm.get('lastName')?.setValue(user.lastName);
          this.registerForm.get('userName')?.setValue(user.userName);
          this.registerForm.get('fathersName')?.setValue(user.fathersName);
          this.registerForm.get('gender')?.setValue(user.gender);
          this.registerForm.get('mobileNumber')?.setValue(user.mobileNumber);
          this.registerForm.get('password')?.setValue(user.password);
        })
      }
    })
  }

  onLogin() {
    if (this.id > 0) {
      this.router.navigateByUrl('/home/profile')
    }
    else this.router.navigateByUrl('/login');
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.habitService.updateUser(this.registerForm.value).subscribe(value => {
        this.onLogin();
      });
    }
  }
}
