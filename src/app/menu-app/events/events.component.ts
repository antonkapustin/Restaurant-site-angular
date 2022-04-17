import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class EventsComponent implements OnInit {
  name = "events";
  constructor() {}

  ngOnInit(): void {}
}
