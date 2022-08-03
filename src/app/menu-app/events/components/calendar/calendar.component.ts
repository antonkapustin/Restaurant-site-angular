import { Component } from "@angular/core";
import * as moment from "moment";
import { CalendarWeekService } from "src/app/services/calendar/calendar-week.service";
import { Day } from "./content/calendar-day/calendar-day.component";

export interface Week {
  days: Day[];
}
@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"],
})
export class CalendarComponent {
  weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  calendar!: Week[];
  constructor(private calendarService: CalendarWeekService) {}
  ngOnInit(): void {
    this.calendarService.date.subscribe(this.getAllMounth.bind(this));
  }
  getAllMounth(now: moment.Moment) {
    const calendar = [];
    const today = moment();
    const startDay = today.clone().startOf("isoWeek");
    const endDay = today.clone().endOf("isoWeek");

    let date = startDay.clone().subtract(1, "day");

    while (date.isBefore(endDay, "day"))
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, "day").clone();
            const active = moment().isSame(value, "date");
            const disabled = !now.isSame(value, "month");
            const selected = now.isSame(value, "date");

            return {
              value,
              active,
              disabled,
              selected,
            };
          }),
      });

    this.calendar = calendar;
  }
}
