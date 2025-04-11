import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReportFacade } from '../../../Domain/Report-Store/Application/Report.facade';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-view-dialog',
  imports: [MatDialogModule, MatButtonModule, CommonModule,FormsModule],
  templateUrl: './report-view-dialog.component.html',
  styleUrl: './report-view-dialog.component.css'
})
export class ReportViewDialogComponent {
  dialogRef = inject(MatDialogRef<ReportViewDialogComponent>); 

  facade = inject(ReportFacade);
  tasks$ = this.facade.selectReportDetail$;

  onClose() {
    this.dialogRef.close();
  }
}
