import { Report } from '../../../Domain/Report-Store/Enitity/Report.model';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-edit-dialog',
  imports: [FormsModule],
  templateUrl: './report-edit-dialog.component.html',
  styleUrl: './report-edit-dialog.component.css'
})
export class ReportEditDialogComponent {
  dialogRef = inject(MatDialogRef<ReportEditDialogComponent>);
  data = inject<Report>(MAT_DIALOG_DATA);

  editedTask: Report = { ...this.data }; 
  onSubmit() {
    this.dialogRef.close(this.editedTask); 
  }
  onClose() {
    this.dialogRef.close();
  }

}
