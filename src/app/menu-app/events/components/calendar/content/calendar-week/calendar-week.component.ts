import { Component, Input } from "@angular/core";
import { Week } from "../../calendar.component";

@Component({
  selector: "app-calendar-week",
  templateUrl: "./calendar-week.component.html",
  styleUrls: ["./calendar-week.component.less"],
})
export class CalendarWeekComponent {
  @Input() week!: Week;
  constructor() {
    console.log(this.week);
  }
}
