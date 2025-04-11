import { createFeature, createReducer, on } from '@ngrx/store';
import { ReportActions } from './Report.action';
import { Report } from '../Enitity/Report.model';

export const TASK_DATA_FEATURE_KEY = 'taskSelctors';

export interface ReportState {
  reports: Report[];
  loading: boolean;
  error: string | null;
  reportDetail: Report | null;
}

export const initialState: ReportState = {
  reports: [],
  loading: false,
  error: null,
  reportDetail: null,
};


export const reportSelectFeature = createFeature({
  name: TASK_DATA_FEATURE_KEY,
  reducer: createReducer(
    initialState,

    on(ReportActions.loadReport, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ReportActions.loadReportSuccess, (state, { report  }) => ({
      ...state,
      reports: report,
      loading: false,
      error: null,
    })),
    on(ReportActions.loadReportFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(ReportActions.addReport, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ReportActions.addReportSuccess, (state, {report}) => ({
      ...state,
      reports: [...state.reports, report],
    })),
    on(ReportActions.addReportFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(ReportActions.deleteReport, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ReportActions.deleteReportSuccess, (state, { id }) => {
      return {
        ...state,
        reports: state.reports.filter(report => report.id !== id),
      };
    }),
    on(ReportActions.deleteReportFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(ReportActions.editReport, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ReportActions.editReportSuccess, (state, { report }) => {
      return {
      ...state,
      reports: state.reports.map((r) => (r.id === report.id ? report : r)),

      }
    }),
    on(ReportActions.editReportFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(ReportActions.detailReport, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ReportActions.detailReportSuccess, (state, { reportdetail }) => ({
      ...state,
      reportDetail: reportdetail,
      loading: false,
    })),
    on(ReportActions.detailReportFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

  ),
});
