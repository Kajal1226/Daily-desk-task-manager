import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../entity/schedule.model';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private apiUrl = 'http://localhost:3000/schedule';

  constructor(private http: HttpClient) {}

  getSchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.apiUrl);
  }

  addSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.apiUrl, schedule);
  }

  deleteSchdule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  editSchedule(schedule: Schedule): Observable<Schedule> {

    return this.http.put<Schedule>(`${this.apiUrl}/${schedule.id}`, schedule);
  }
  detailSchedule(id: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.apiUrl}/${id}`);
  }
}
