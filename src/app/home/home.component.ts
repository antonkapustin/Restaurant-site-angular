import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  name = "home";
  constructor() {}

  ngOnInit(): void {}
}
