import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Report } from '../Enitity/Report.model';

export const ReportActions = createActionGroup({
  source: 'Task',
  events: {
    'Load Report': emptyProps(),
    'Load Report Success': props<{ report: Report[] }>(),
    'Load Report Failure': props<{ error: string }>(),

    'Add Report': props<{ report: Report }>(),
    'Add Report Success': props<{ report: Report }>(),
    'Add Report Failure': props<{ error: string }>(),

    'Delete Report': props<{ id: number }>(),
    'Delete Report Success': props<{ id: number }>(),
    'Delete Report Failure': props<{ error: string }>(),

    'Edit Report': props<{ report: Report }>(),
    'Edit Report Success': props<{ report: Report }>(),
    'Edit Report Failure': props<{ error: string }>(),


    'detail Report': props<{ id : number }>(),
    'detail Report Success': props<{ reportdetail: Report }>(),
    'detail Report Failure': props<{ error: string }>(),
  },
});
