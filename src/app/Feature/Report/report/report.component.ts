import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, NgForm } from '@angular/forms';
import { ReportFacade } from '../../../Domain/Report-Store/Application/Report.facade';
import { MatButtonModule } from '@angular/material/button';
import { Report } from '../../../Domain/Report-Store/Enitity/Report.model';
import { Router, RouterModule,RouterOutlet } from '@angular/router';
import { ReportEditDialogComponent } from '../report-edit-dialog/report-edit-dialog.component';
import { taskEditDialogService } from '../report-edit-dialog/Service/report-edit-dialog.service.data';
import { ReportViewDialogComponent } from '../report-view-dialog/report-view-dialog.component';


@Component({
  selector: 'app-report',
  imports: [CommonModule, FormsModule, MatButtonModule,RouterModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  facade = inject(ReportFacade);
  dialog = inject(MatDialog);
  router = inject(Router); 
  dialogService = inject(taskEditDialogService);
  editTitle: string = '';
  report: Report = {
    title: '',
    description: '',
    completed: false,
  };
  showForm = false;
  tasks$ = this.facade.selectList$;
  
  ngOnInit(): void {
    this.facade.loadReport();
  }



  deleteTask(id: number) {
    alert('Delete Button Clicked! Task ID: ' + id);
    this.facade.deleteReport(id);
  }

  editTask(task: Report) {
    this.dialogService.openDialog<Report>(ReportEditDialogComponent, task)
    .subscribe((updatedTask) => {
      if (updatedTask) {
        this.facade.editReport(updatedTask);
      }
    });
  }

  openDialog(id:number): void {
    this.dialog.open(ReportViewDialogComponent);
    this.facade.detailReport(id);
  }
  goToCreateReport() {
    this.router.navigate(['/create-report']);
  }
}
