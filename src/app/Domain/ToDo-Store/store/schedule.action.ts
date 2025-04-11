import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Schedule } from '../entity/schedule.model';

export const ScheduleActions = createActionGroup({
  source: 'Scheduele',
  events: {
    'Load Schedule': emptyProps(),
    'Load Schedule Success': props<{ schedule: Schedule[] }>(),
    'Load Schedule Failure': props<{ error: string }>(),

    'Add Schedule': props<{ schedule: Schedule }>(),
    'Add Schedule Success': props<{ schedule: Schedule }>(),
    'Add Schedule Failure': props<{ error: string }>(),

    'Delete Schedule': props<{ id: number }>(),
    'Delete Schedule Success': props<{ id: number }>(),
    'Delete Schedule Failure': props<{ error: string }>(),

    'Edit Schedule': props<{ schedule: Schedule }>(),
    'Edit Schedule Success': props<{ schedule: Schedule }>(),
    'Edit Schedule Failure': props<{ error: string }>(),

    'Detail Schedule': props<{ id: number }>(),
    'Detail Schedule Success': props<{ scheduleDetail: Schedule }>(),
    'Detail Schedule Failure': props<{ error: string }>(),
  },
});
