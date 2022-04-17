import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, catchError, map, Observable, of } from "rxjs";
import { IData } from "data.interfese";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  items$: BehaviorSubject<IData[]> = new BehaviorSubject<IData[]>([]);
  private api =
    "https://raw.githubusercontent.com/antonkapustin/Restaurant-site-angular/main/data.json";

  constructor(private http: HttpClient) {}

  getData(): Observable<IData[]> {
    const data = this.http.get<IData[]>(this.api).pipe(
      map((response) => {
        this.updateItems(response);
        return response;
      }),
      catchError(this.handleError<any>("GetData"))
    );

    return data;
  }

  private updateItems(data: IData[]): void {
    this.items$.next(data);
  }

  getItems$(): BehaviorSubject<IData[]> {
    return this.items$;
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
