import {Component, OnInit} from '@angular/core';
import {CalenderService, DayTasks} from "../services/calender.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public days$!: Observable<DayTasks[]>;

  constructor(
    private readonly calenderService: CalenderService,
  ) {
  }

  ngOnInit() {
    this.days$ = this.calenderService.tasks$;
  }
}
