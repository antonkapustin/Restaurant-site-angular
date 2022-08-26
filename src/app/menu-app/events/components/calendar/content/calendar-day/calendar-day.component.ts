import { Component, Input } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";
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
  constructor(private taskService: TaskService) {}

  loadImg(day: moment.Moment): string {
    let data = this.task$.getValue();
    let date = day.format("DD.MM.YYYY");
    if (!data[date]) {
      return "";
    } else {
      return data[date];
    }
  }
}
