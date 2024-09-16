import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Habit } from '../models/Habit';
import { HabitService } from '../services/habit.service';

@Component({
  selector: 'habit',
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.css'
})
export class HabitComponent {
  habits: Habit[] = [];
  constructor(
    public router: Router,
    public habitService: HabitService,
  ) {
    this.getAllHabits();
  }
  onManageHabit(id: number) {
    this.router.navigateByUrl('home/managehabit/' + id);
  }
  getAllHabits() {
    this.habitService.getAllHabits().subscribe(habits => {
      this.habits = habits;
    })
  }
  deleteHabit(id: number) {
    this.habitService.deleteHabit(id).subscribe(result => {
      this.getAllHabits();
    });
  }
}
