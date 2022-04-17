import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-menu-items",
  templateUrl: "./menu-items.component.html",
  styleUrls: ["./menu-items.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class MenuItemsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
