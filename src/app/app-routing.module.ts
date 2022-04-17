import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsComponent } from "./menu-app/events/events.component";
import { ResolversResolver } from "./resolvers/resolvers.resolver";
// import { MenuComponent } from './menu-app/menu/menu.component';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "menu",
    loadChildren: () =>
      import("./menu-app/menu-app.module").then((m) => m.MenuAppModule),
    resolve: {
      menu: ResolversResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
