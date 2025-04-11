import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleFacade } from '../../../Domain/ToDo-Store/application/schedule.facade';
import { Schedule } from '../../../Domain/ToDo-Store/entity/schedule.model';
import { ScheduleEditDialogComponent } from '../schedule-edit-dialog/schedule-edit-dialog.component';
import { Router, RouterModule } from '@angular/router';
import { scheduleEditDialogService } from '../schedule-edit-dialog/schedule-service/schedule-edit-dialog.service';
import { ScheduleViewDialogComponent } from '../schedule-view-dialog/schedule-view-dialog.component';

@Component({
  selector: 'app-schedule',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  editTitle: string = '';

  // showForm: boolean = false;
  dialog = inject(MatDialog);
  facade = inject(ScheduleFacade);
  router = inject(Router);
  dialogService = inject(scheduleEditDialogService);
  tasks = this.facade.selectList$;

  toggleComplete(task: Schedule) {
    const updated = { ...task, completed: !task.completed };
    this.facade.editSchedule(updated);
  }

  ngOnInit(): void {
    this.facade.loadSchedule();
  }

  deleteSchedule(id: number) {
    alert('Delete Button Clicked! Task ID: ' + id);
    this.facade.deleteSchedule(id);
  }

  editSchedule(task: Schedule) {
    this.dialogService
      .openDialog<Schedule>(ScheduleEditDialogComponent, task)
      .subscribe((updatedTask) => {
        if (updatedTask) {
          this.facade.editSchedule(updatedTask);
        }
      });
  }

  openDialog(id: number): void {
    this.dialog.open(ScheduleViewDialogComponent);
    this.facade.detailSchedule(id);
  }
  goToCreateSchedule() {
    this.router.navigate(['/create-schedule']);
  }
}
