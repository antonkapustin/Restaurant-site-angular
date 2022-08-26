import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResolversResolver } from "../resolvers/resolvers.resolver";
import { EventsComponent } from "./events/events.component";
import { LocationComponent } from "./location/location.component";
import { MenuAppComponent } from "./menu-app.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
  {
    path: "",
    component: MenuAppComponent,

    children: [
      {
        path: "food",
        component: MenuComponent,
      },
      { path: "events", component: EventsComponent },
      { path: "about", component: LocationComponent },
      { path: "", redirectTo: "food", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAppRoutingModule {}
