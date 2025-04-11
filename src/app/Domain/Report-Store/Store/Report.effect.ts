import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, of } from 'rxjs';
import { ReportActions } from './Report.action';
import { ReportService } from '../Infrastructure/Report.data.service';

@Injectable()
export class ReportEffects {
  private actions$ = inject(Actions);
  private reportService = inject(ReportService);

  loadReports$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.loadReport),
      mergeMap(() =>
        this.reportService.getReports().pipe(
          map((data) => ReportActions.loadReportSuccess({ report: data })),
          catchError((error) =>
            of(ReportActions.loadReportFailure({ error: error.message }))
          )
        )
      )
    )
  );

  addReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.addReport),
      mergeMap(({report}) =>
        this.reportService.addReport(report).pipe(
          map((data) => ReportActions.addReportSuccess({ report: data })),
          catchError((error) =>
            of(ReportActions.addReportFailure({ error: error.message }))
          )
        )
      )
    )
  );

  deleteReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.deleteReport),
      mergeMap(({ id }) => {
        console.log('Effect: Deleting Report ID:', id);
        return this.reportService.deleteReport(id).pipe(
          map(() => {
            console.log('Delete Success:', id);
            return ReportActions.deleteReportSuccess({ id });
          }),
          catchError((error) => {
            console.error('Delete Failed:', error);
            return of(ReportActions.deleteReportFailure({ error: error.message }));
          })
        );
      })
    )
  );
  
  editReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.editReport),
      mergeMap(({ report }) => {
        return this.reportService.editReport(report).pipe(
          map((updatedReport) => {
            return ReportActions.editReportSuccess({ report: updatedReport });
          }),
          catchError((error) => {
            return of(ReportActions.editReportFailure({ error: error.message }));
          })
        );
      })
    )
  );
  
  detailReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.detailReport),
      mergeMap(({ id }) => {
        return this.reportService.detailReport(id).pipe(
          map((report) => {
            return ReportActions.detailReportSuccess({ reportdetail: report });
          }),
          catchError((error) => {
            console.error('Effect: Fetching Details Failed:', error);
            return of(ReportActions.detailReportFailure({ error: error.message }));
          })
        );
      })
    )
  );
}
