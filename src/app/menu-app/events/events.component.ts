import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { TaskService } from "src/app/services/calendar/task.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class EventsComponent implements OnInit {
  name = "events";
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.loadTasks().subscribe();
  }
}
