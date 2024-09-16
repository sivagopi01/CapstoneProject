import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitService } from '../services/habit.service';
import { Habit } from '../models/Habit';
import { AuthFields } from '../constants/AuthFields';

@Component({
  selector: 'app-manage-habit',
  templateUrl: './manage-habit.component.html',
  styleUrl: './manage-habit.component.css'
})
export class ManageHabitComponent implements OnInit {
  habitForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    userId: new FormControl(parseInt(localStorage.getItem(AuthFields.UserId) ?? '0')),
    name: new FormControl('', Validators.required),
    description: new FormControl(),
    startDate: new FormControl(this.formatDate(new Date())),
    endDate: new FormControl(this.formatDate(new Date())),
  });
  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public habitService: HabitService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var id = parseInt(params['id']);
      if (id > 0) {
        this.habitService.getHabitById(id).subscribe(habit => {
          this.habitForm.get('id')?.setValue(habit.id);
          this.habitForm.get('userId')?.setValue(parseInt(localStorage.getItem(AuthFields.UserId) ?? '0'));
          this.habitForm.get('name')?.setValue(habit.name);
          this.habitForm.get('description')?.setValue(habit.description);
          this.habitForm.get('startDate')?.setValue(this.formatDate(new Date(habit.startDate!)));
          this.habitForm.get('endDate')?.setValue(this.formatDate(new Date(habit.endDate!)));
        });
      }
    })
  }

  onCancel() {
    this.router.navigateByUrl('/home/habit');
  }
  onSave() {
    if (this.habitForm.valid) {
      this.habitService.updateHabit(this.habitForm.value).subscribe(isUpdate => {
        if (isUpdate) {
          this.onCancel();
        }
      })
    }
  }
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
