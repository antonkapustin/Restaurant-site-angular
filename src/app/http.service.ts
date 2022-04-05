import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { IData } from "data.interfese";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private api =
    "https://raw.githubusercontent.com/antonkapustin/Restaurant-site-angular/main/data.json";

  constructor(private http: HttpClient) {}

  getData(): Observable<IData> {
    return this.http
      .get<IData>(this.api)
      .pipe(catchError(this.handleError<any>("GetData")));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
