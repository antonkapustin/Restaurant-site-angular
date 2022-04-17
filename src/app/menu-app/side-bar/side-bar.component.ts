import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
