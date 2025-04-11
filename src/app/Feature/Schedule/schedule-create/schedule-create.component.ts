import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Schedule } from '../../../Domain/ToDo-Store/entity/schedule.model';
import { ScheduleFacade } from '../../../Domain/ToDo-Store/application/schedule.facade';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-create',
  imports: [ReactiveFormsModule],
  templateUrl: './schedule-create.component.html',
  styleUrl: './schedule-create.component.css'
})
export class ScheduleCreateComponent {
  facade = inject(ScheduleFacade);
  router = inject(Router);
  todoForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
  });

  onSubmit() {
    const formValue = this.todoForm.value;
    if (formValue.title?.trim() && formValue.description?.trim()) {
      const newTask: Schedule = {
        title: formValue.title,
        description: formValue.description,
        date: formValue.date ?? '',
        completed: false,
      };
      this.facade.addSchedule(newTask);
      this.router.navigate(['/schedule']);
      this.todoForm.reset();
    } else {
      alert('Please enter a title and description.');
    }
  }
}
