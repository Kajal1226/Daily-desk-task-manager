import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { reportSelectFeature } from '../Store/Report.store';
import { ReportActions } from '../Store/Report.action';
import { Report } from '../Enitity/Report.model';

@Injectable({ providedIn: 'root' })
export class ReportFacade {
  store = inject(Store);
  feature = reportSelectFeature;
  actions = ReportActions;

  selectList$ = this.store.select(this.feature.selectReports);
  selectReportDetail$ = this.store.select(this.feature.selectReportDetail);

  loadReport() {
    this.store.dispatch(this.actions.loadReport());
  }
  addReport(report: Report) {
    this.store.dispatch(this.actions.addReport({ report }));
  }
  deleteReport(id: number) {
    this.store.dispatch(this.actions.deleteReport({ id }));
  }

  editReport(report: Report) {
    this.store.dispatch(this.actions.editReport({ report }));
  }

  detailReport(id: number) {
    this.store.dispatch(this.actions.detailReport({ id }));
  }
}
