import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideNativeDateAdapter } from '@angular/material/core';
import { reportSelectFeature } from './Domain/Report-Store/Store/Report.store';
import { scheduleSelectFeature } from './Domain/ToDo-Store/store/schedule.store';
import { ReportEffects } from './Domain/Report-Store/Store/Report.effect';
import { ScheduleEffects } from './Domain/ToDo-Store/store/schedule.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideNativeDateAdapter(),
    provideStore(),
    provideHttpClient(),
    provideState(reportSelectFeature),
    provideState(scheduleSelectFeature),
    provideEffects([ReportEffects, ScheduleEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};

