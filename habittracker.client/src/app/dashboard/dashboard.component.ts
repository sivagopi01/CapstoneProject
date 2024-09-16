import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HabitService } from '../services/habit.service';
import { Habit } from '../models/Habit';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  habits: Habit[] = [];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [],
  };
  constructor(public habitService: HabitService, public cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.habitService.getAllHabits().subscribe(habits => {
      this.habits = habits;
      const events = habits.map((habit) => ({
        title: habit.name,
        start: new Date(habit.startDate!),
        end: this.adjustEndDate(habit.endDate!),
        description: habit.description,
        allDay: true,
        backgroundColor: this.getRandomColor(), 
        borderColor: this.getRandomColor(),
      }));
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, interactionPlugin],
        events: events, 
        eventClick: this.handleEventClick.bind(this),
      };
    })
    this.cdr.detectChanges();
  }
  handleEventClick(info:any) {
    //alert(info.event.title + ' - ' + info.event.extendedProps.description);
  }
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  adjustEndDate(endDate:Date):Date {
    let today = new Date(endDate);
    let tomorrow = new Date(today); 
    tomorrow.setDate(tomorrow.getDate() + 1);
    return new Date(tomorrow.toISOString());
  }
  
}
