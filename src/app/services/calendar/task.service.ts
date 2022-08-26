import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject, catchError, map, Observable, of } from "rxjs";

export interface Task {
  [key: string]: string;
}

@Injectable({
  providedIn: "root",
})
export class TaskService {
  tasks$: BehaviorSubject<Task> = new BehaviorSubject<Task>({});
  api: string =
    "https://raw.githubusercontent.com/antonkapustin/Restaurant-site-angular/main/events.json";
  constructor(private http: HttpClient) {}
  loadTasks() {
    return this.http.get<any>(this.api).pipe(
      map((response) => {
        this.updateTasks(response);
        return response;
      }),
      catchError(this.handleError<any>("GetTasks"))
    );
  }
  updateTasks(task: Task): void {
    this.tasks$.next(task);
  }
  getItems$(): BehaviorSubject<Task> {
    return this.tasks$;
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
