import { Component, Input } from "@angular/core";
import * as moment from "moment";
import { CalendarWeekService } from "src/app/services/calendar/calendar-week.service";
import { MomentPipe } from "src/app/services/pipe/moment.pipe";

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
  constructor(private calendarService: CalendarWeekService) {}

  select(day: moment.Moment) {
    this.calendarService.changeDate(day);
  }
}
