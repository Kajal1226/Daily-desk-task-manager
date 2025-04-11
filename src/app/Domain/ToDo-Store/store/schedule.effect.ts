import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ScheduleService } from '../infrastructure/schedule.data.service';
import { ScheduleActions } from './schedule.action';

@Injectable()
export class ScheduleEffects {
  private actions$ = inject(Actions);
  private scheduleService = inject(ScheduleService);

  loadSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.loadSchedule),
      mergeMap(() =>
        this.scheduleService.getSchedule().pipe(
          map((data) => ScheduleActions.loadScheduleSuccess({ schedule: data })),
          catchError((error) =>
            of(ScheduleActions.loadScheduleFailure({ error: error.message }))
          )
        )
      )
    )
  );

  addSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.addSchedule),
      mergeMap(({ schedule }) =>
        this.scheduleService.addSchedule(schedule).pipe(
          map((newTask) => ScheduleActions.addScheduleSuccess({ schedule: newTask })),
          catchError((error) => of(ScheduleActions.addScheduleFailure({ error })))
        )
      )
    )
  );
  

  deleteSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.deleteSchedule),
      mergeMap(({ id }) => {
        return this.scheduleService.deleteSchdule(id).pipe(
          map(() => {
            return ScheduleActions.deleteScheduleSuccess({ id });
          }),
          catchError((error) => {
            return of(
              ScheduleActions.deleteScheduleFailure({ error: error.message })
            );
          })
        );
      })
    )
  );

  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.editSchedule),
      mergeMap(({ schedule }) => {
        return this.scheduleService.editSchedule(schedule).pipe(
          map((updatedTask) => {
            return ScheduleActions.editScheduleSuccess({ schedule: updatedTask });
          }),
          catchError((error) => {
            return of(
              ScheduleActions.editScheduleFailure({ error: error.message })
            );
          })
        );
      })
    )
  );

  detailSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.detailSchedule),
      mergeMap(({ id }) => {
        return this.scheduleService.detailSchedule(id).pipe(
          map((schedule) => {
            return ScheduleActions.detailScheduleSuccess({ scheduleDetail: schedule }); 
          }),
          catchError((error) => {
            return of(
              ScheduleActions.detailScheduleFailure({ error: error.message })
            );
          })
        );
      })
    )
  );
}
