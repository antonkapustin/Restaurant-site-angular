import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  onActivate(event: any): void {
    document.body.classList.value = `page page_${event.name}`;
  }
}
