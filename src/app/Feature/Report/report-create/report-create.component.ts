import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ReportFacade } from '../../../Domain/Report-Store/Application/Report.facade';
import { Report } from '../../../Domain/Report-Store/Enitity/Report.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './report-create.component.html',
  styleUrl: './report-create.component.css'
})
export class ReportCreateComponent {
  facade = inject(ReportFacade);
  router = inject(Router);
  ReportForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit(): void {
    const formValue = this.ReportForm.value;

    if (formValue.title?.trim() && formValue.description?.trim()) {
      const newTask: Report = {
        title: formValue.title,
        description: formValue.description,
        completed: false,
      };
      this.facade.addReport(newTask);
      this.router.navigate(['/reporting']);
      this.ReportForm.reset();
    } else {
      alert('Please enter a title and description.');
    }
  }
}
