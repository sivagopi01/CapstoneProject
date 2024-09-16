import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHabitComponent } from './manage-habit.component';

describe('ManageHabitComponent', () => {
  let component: ManageHabitComponent;
  let fixture: ComponentFixture<ManageHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageHabitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
