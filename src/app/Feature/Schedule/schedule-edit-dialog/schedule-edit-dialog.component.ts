import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Schedule } from '../../../Domain/ToDo-Store/entity/schedule.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-edit-dialog',
  imports: [ MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,],
  templateUrl: './schedule-edit-dialog.component.html',
  styleUrl: './schedule-edit-dialog.component.css'
})
export class ScheduleEditDialogComponent {
  dialogRef = inject(MatDialogRef<ScheduleEditDialogComponent>);
  data = inject<Schedule>(MAT_DIALOG_DATA);
  editedSchedule: Schedule = { ...this.data };

  onSubmit() {

    this.dialogRef.close(this.editedSchedule);
  }
  onClose() {
    this.dialogRef.close();
  }
}
