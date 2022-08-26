import { Component, Input } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";
import { CalendarWeekService } from "src/app/services/calendar/calendar-week.service";
import { TaskService } from "src/app/services/calendar/task.service";
import { Task } from "src/app/services/calendar/task.service";

export interface Day {
  value: moment.Moment;
  active: Boolean;
  disabled: boolean;
  selected: boolean;
}

@Component({
  selector: "app-calendar-day",
  templateUrl: "./calendar-day.component.html",
  styleUrls: ["./calendar-day.component.less"],
})
export class CalendarDayComponent {
  @Input() day!: Day;
  task$: BehaviorSubject<Task> = this.taskService.getItems$();
  constructor(
    private calendarService: CalendarWeekService,
    private taskService: TaskService
  ) {}

  loadImg(day: moment.Moment): string {
    let data = this.task$.getValue();
    console.log(Object.keys(data));
    return "";
  }
}
