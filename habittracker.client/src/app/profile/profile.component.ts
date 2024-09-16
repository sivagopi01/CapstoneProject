import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { HabitService } from '../services/habit.service';
import { AuthFields } from '../constants/AuthFields';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  constructor(public habitService: HabitService,
    public router: Router) { }
  ngOnInit() {
    this.habitService.getUser(parseInt(localStorage.getItem(AuthFields.UserId) ?? '0')).subscribe(user => {
      this.user = user;
    })
  }
  onEditProfile() {
    this.router.navigateByUrl('register/' + parseInt(localStorage.getItem(AuthFields.UserId) ?? '0'));
  }
}
