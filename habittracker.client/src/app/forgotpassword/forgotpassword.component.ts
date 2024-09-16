import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  passwordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(),
    confirmPassword: new FormControl(),
  });
  constructor(public router: Router) { }
  onBack() {
    this.router.navigateByUrl('/login');
  }
}
