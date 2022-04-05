import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { IData } from "data.interfese";
import { HttpService } from "src/app/http.service";

@Component({
  selector: "app-categoties",
  templateUrl: "./categoties.component.html",
  styleUrls: ["./categoties.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class CategotiesComponent implements OnInit {
  data: IData = {};
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getData().subscribe((x) => {
      console.log(x);
    });
    console.log(this.data);
  }
}
