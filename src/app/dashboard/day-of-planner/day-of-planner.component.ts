import {Component, Input} from '@angular/core';
import {CalenderService, DayTasks} from "../../services/calender.service";

@Component({
  selector: 'app-day-of-planner',
  templateUrl: './day-of-planner.component.html',
  styleUrls: ['./day-of-planner.component.scss']
})
export class DayOfPlannerComponent {

@Input() public day!: DayTasks;

constructor(
  private readonly calendarService: CalenderService,
) {
}
  newDaysTask(day: number) {
    alert('Do you really want to create a task for this day?');

    this.calendarService.createTask(day)
  }
}
