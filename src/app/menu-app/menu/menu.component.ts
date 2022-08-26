import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { IData } from "data.interfese";
import { BehaviorSubject, Subscription } from "rxjs";
import { HttpService } from "src/app/services/http-service/http.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit, OnDestroy {
  data$: BehaviorSubject<IData[]> = this.http.getItems$();
  data: IData[] = [];
  menu!: string[];
  subscriptions: Subscription[] = [];
  constructor(private hostElement: ElementRef, private http: HttpService) {}

  ngOnInit(): void {
    let subscription$ = this.http.getData().subscribe();
    this.data = this.data$.getValue();
    this.menu = this.data[0].items;
    this.subscriptions.push(subscription$);
  }
  onClick(event: Event) {
    let current = event.target as HTMLButtonElement;

    while (current !== this.hostElement.nativeElement.children[0]) {
      if (current.classList.contains("categories__button")) {
        break;
      }
      current = current.parentElement as HTMLButtonElement;
    }
    if (current === this.hostElement.nativeElement.children[0]) {
      return;
    }

    let newData = this.data.filter((el) => {
      return el.name === current.value;
    });
    this.menu = newData[0].items;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => {
      item.unsubscribe();
    });
  }
}
