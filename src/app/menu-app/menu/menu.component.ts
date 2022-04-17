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
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  data$: BehaviorSubject<IData[]> = this.http.getItems$();
  data: IData[] = [];
  menu!: string[];
  constructor(private hostElement: ElementRef, private http: HttpService) {}

  ngOnInit(): void {
    this.http.getData().subscribe();
    this.data = this.data$.getValue();
    this.menu = this.data[0].items;
    console.log();
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
}
