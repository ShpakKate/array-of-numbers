import {Injectable} from '@angular/core';
import {BehaviorSubject, map} from "rxjs";

export interface DayTasks {
  day: number;
  value: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  private _tasks = new BehaviorSubject([
    {day: 1, value: '1'},
    {day: 2, value: '2'},
    {day: 3, value: null},
    {day: 4, value: null},
    {day: 5, value: null},
    {day: 6, value: '6'},
    {day: 7, value: '7'},
    {day: 8, value: '8'},
    {day: 9, value: null},
    {day: 10, value: '10'},
    {day: 11, value: '11'},
    {day: 12, value: '12'},
    {day: 13, value: '13'},
    {day: 14, value: null},
    {day: 15, value: null},
    {day: 16, value: null},
    {day: 17, value: '17'},
    {day: 18, value: '18'},
    {day: 19, value: '19'},
    {day: 20, value: '20'},
    {day: 21, value: '21'},
    {day: 22, value: '22'},
    {day: 23, value: '23'},
    {day: 24, value: '24'},
    {day: 25, value: '25'},
    {day: 26, value: '26'},
    {day: 27, value: '27'},
    {day: 28, value: '28'},
    {day: 29, value: '29'},
    {day: 30, value: '30'},
  ]);
  readonly tasks$ = this._tasks.asObservable();

  createTask(item: number) {
    this.tasks$.pipe(
      map( days => {
        const newDaysTask = days.find(
          day => day.day === item)
        if (newDaysTask) {
          newDaysTask.value = item.toString();
        }
      })
    ).subscribe();
  }
}
