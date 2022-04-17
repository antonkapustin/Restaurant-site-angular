import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.less"],
})
export class ButtonComponent implements OnInit {
  @Input() title: string = "";
  @Input() class: string = "";

  constructor() {}

  ngOnInit(): void {}
}
