import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { IData } from "data.interfese";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "src/app/services/http-service/http.service";

@Component({
  selector: "app-categoties",
  templateUrl: "./categoties.component.html",
  styleUrls: ["./categoties.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class CategotiesComponent implements OnInit {
  categories$: BehaviorSubject<IData[]> = this.http.getItems$();
  data: IData[] = [];
  menu!: IData;
  constructor(private http: HttpService, private hostElement: ElementRef) {}

  async ngOnInit() {
    this.http.getData().subscribe();
    this.data = this.categories$.getValue();
    this.menu = this.data[0];
  }

  onClick(event: Event) {
    let current = event.target as HTMLButtonElement;

    while (current !== this.hostElement.nativeElement) {
      if (current.classList.contains("categories__button")) {
        break;
      }
      current = current.parentElement as HTMLButtonElement;
    }
    if (current === this.hostElement.nativeElement) {
      return;
    }
    let newData = this.data.filter((el) => {
      return el.name === current.value;
    });
    console.log(...newData);
  }
}
