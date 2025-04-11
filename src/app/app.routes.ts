import { Routes } from '@angular/router';
import { ReportComponent } from './Feature/Report/report/report.component';
import { ScheduleComponent } from './Feature/Schedule/schedule/schedule.component';
import { ReportCreateComponent } from './Feature/Report/report-create/report-create.component';
import { ScheduleCreateComponent } from './Feature/Schedule/schedule-create/schedule-create.component';

export const routes: Routes = [ {
    path: 'reporting',
    component: ReportComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: 'create-report',
    component: ReportCreateComponent,
  },
  {
    path: 'create-schedule',
    component: ScheduleCreateComponent,
  }];
