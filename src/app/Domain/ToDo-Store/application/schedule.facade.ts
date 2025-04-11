import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { scheduleSelectFeature } from '../store/schedule.store';
import { ScheduleActions } from '../store/schedule.action';
import { Schedule } from '../entity/schedule.model';

@Injectable({ providedIn: 'root' })
export class ScheduleFacade {
  store = inject(Store);
  feature = scheduleSelectFeature;
  actions = ScheduleActions;

  selectList$ = this.store.selectSignal(this.feature.selectSchedules);
  selectScheduleDetail$ = this.store.select(this.feature.selectScheduleDetail);

  loadSchedule() {
    this.store.dispatch(this.actions.loadSchedule());
  }
  addSchedule(schedule: Schedule) {
    this.store.dispatch(this.actions.addSchedule({ schedule }));
  }
  deleteSchedule(id: number) {
    this.store.dispatch(this.actions.deleteSchedule({ id }));
  }

  editSchedule(schedule: Schedule) {

    this.store.dispatch(this.actions.editSchedule({ schedule }));
  }

  detailSchedule(id: number) {
    this.store.dispatch(this.actions.detailSchedule({ id }));
  }
}
