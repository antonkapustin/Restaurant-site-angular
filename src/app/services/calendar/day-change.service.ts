import { Injectable, PLATFORM_ID, Inject } from "@angular/core";
import { interval, Observable, of } from "rxjs";
import { map, distinctUntilChanged, startWith } from "rxjs/operators";
import { isPlatformServer } from "@angular/common";

const distinctUntilNewDay = distinctUntilChanged(
  (x: Date, y: Date) => x.toDateString() === y.toDateString()
);

export interface DayInterface {
  dayName: string;
  date: string;
  day: string;
  month: string;
  year: string;
  scrollId: string;
  isCurrentDay: boolean;
  isCurrentMonth: boolean;
  isWeekend: boolean;
}

@Injectable({
  providedIn: "root",
})
export class DayChangeService {
  /**
   * Интервал между проверками, не сменился ли день, в мс
   */
  readonly INTERVAL = 60 * 1000;
  private platformServer: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.platformServer = isPlatformServer(platformId);
  }

  /**
   * Возвращает `Observable` с текущей датой
   *
   * Срабатывает сразу после подписки и затем при смене дня.
   * Интервал проверки обозначен в члене `INTERVAL`
   */
  day(): Observable<Date> {
    if (this.platformServer) {
      return of(new Date());
    }
    return interval(this.INTERVAL).pipe(
      startWith(0),
      map(() => new Date()),
      distinctUntilNewDay
    );
  }
}
