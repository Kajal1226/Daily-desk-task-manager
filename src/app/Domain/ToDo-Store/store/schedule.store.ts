import { createFeature, createReducer, on } from '@ngrx/store';
import { Schedule } from '../entity/schedule.model';
import {  ScheduleActions } from './schedule.action';

export const TASK_DATA_FEATURE_KEY = 'taskSelctor';

export interface ScheduleState {
  schedules: Schedule[];
  loading: boolean;
  error: string | null;
  scheduleDetail: Schedule | null;
}

export const initialState: ScheduleState = {
  schedules: [],
  loading: false,
  error: null,
  scheduleDetail: null,
};

export const scheduleSelectFeature = createFeature({
  name: TASK_DATA_FEATURE_KEY,
  reducer: createReducer(
    initialState,

    on(ScheduleActions.loadSchedule, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ScheduleActions.loadScheduleSuccess, (state, { schedule  }) => ({
      ...state,
      schedules: schedule,
      loading: false,
      error: null,
    })),
    on(ScheduleActions.loadScheduleFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(ScheduleActions.addSchedule, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ScheduleActions.addScheduleSuccess, (state, { schedule }) => ({
      ...state,
      schedules: [...state.schedules, schedule],
    })),
    on(ScheduleActions.addScheduleFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(ScheduleActions.deleteSchedule, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ScheduleActions.deleteScheduleSuccess, (state, { id }) => {
      return {
        ...state,
        schedules: state.schedules.filter(schedule => schedule.id !== id),
      };
    }),
    
    on(ScheduleActions.deleteScheduleFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(ScheduleActions.editSchedule, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ScheduleActions.editScheduleSuccess, (state, { schedule }) => {
      return {
      ...state,
      schedules: state.schedules.map((r) => (r.id === schedule.id ? schedule : r)),

      }
    }),
    on(ScheduleActions.editScheduleFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
    on(ScheduleActions.detailSchedule, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ScheduleActions.detailScheduleSuccess, (state, { scheduleDetail }) => ({
      ...state,
      scheduleDetail: scheduleDetail,
      loading: false,
      error: null,
    })),
    on(ScheduleActions.detailScheduleFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
  ),
});
