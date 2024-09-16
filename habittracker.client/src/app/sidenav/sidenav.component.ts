import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabitService } from '../services/habit.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  constructor(public router: Router, public habitService: HabitService) { }
  onLogout() {
    this.habitService.removeUserFromLocal();
    this.router.navigateByUrl('/login');
  }
}
