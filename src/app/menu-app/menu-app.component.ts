import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-menu-app",
  templateUrl: "./menu-app.component.html",
  styleUrls: ["./menu-app.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class MenuAppComponent {
  name = "menu";
  onActivate(event: any): void {
    document.body.classList.add(`page_${event.name}`);
  }

  onDeactivate(event: any): void {
    document.body.classList.remove(`page_${event.name}`);
  }
}
