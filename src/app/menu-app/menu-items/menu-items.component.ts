import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { IData } from "data.interfese";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "src/app/http.service";

@Component({
  selector: "app-menu-items",
  templateUrl: "./menu-items.component.html",
  styleUrls: ["./menu-items.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class MenuItemsComponent implements OnInit {
  categories$: BehaviorSubject<IData[]> = this.http.getItems$();
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getData().subscribe();
  }
}
