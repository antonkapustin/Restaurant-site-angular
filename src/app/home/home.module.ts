import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MainComponent } from "./main/main.component";
import { DiscriptionComponent } from "./discription/discription.component";
import { HomeMenuComponent } from "./home-menu/home-menu.component";

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    DiscriptionComponent,
    HomeMenuComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
