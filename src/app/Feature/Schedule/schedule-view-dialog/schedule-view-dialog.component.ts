import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ScheduleFacade } from '../../../Domain/ToDo-Store/application/schedule.facade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-view-dialog',
  imports: [CommonModule],
  templateUrl: './schedule-view-dialog.component.html',
  styleUrl: './schedule-view-dialog.component.css'
})
export class ScheduleViewDialogComponent {
  dialogRef = inject(MatDialogRef<ScheduleViewDialogComponent>);
 facade = inject(ScheduleFacade);
 schedule$ = this.facade.selectScheduleDetail$;

 onClose() {
  this.dialogRef.close();
}
}
