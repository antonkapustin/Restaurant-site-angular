import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { IData } from "data.interfese";
import { catchError, delay, EMPTY, Observable, of } from "rxjs";
import { HttpService } from "../services/http-service/http.service";

@Injectable({
  providedIn: "root",
})
export class ResolversResolver implements Resolve<IData[]> {
  constructor(private httpServece: HttpService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IData[]> {
    return this.httpServece.getData().pipe(
      delay(200),
      catchError(() => {
        this.router.navigate(["events"]);
        return EMPTY;
      })
    );
  }
}
