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
  selector: "app-categoties",
  templateUrl: "./categoties.component.html",
  styleUrls: ["./categoties.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class CategotiesComponent implements OnInit {
  categories$: BehaviorSubject<IData[]> = this.http.getItems$();

  constructor(private http: HttpService, private hostElement: ElementRef) {}

  ngOnInit(): void {
    this.http.getData().subscribe();
    console.log(this.categories$.getValue());
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
  }
}
