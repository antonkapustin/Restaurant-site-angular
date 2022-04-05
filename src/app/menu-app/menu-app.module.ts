import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuAppRoutingModule } from './menu-app-routing.module';
import { MenuAppComponent } from './menu-app.component';
import { CategotiesComponent } from './categoties/categoties.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { EventsComponent } from './events/events.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    MenuAppComponent,
    SideBarComponent,
    EventsComponent,
    MenuComponent,
    MenuItemsComponent,
    CategotiesComponent,
    LocationComponent,
  ],
  imports: [CommonModule, MenuAppRoutingModule],
  providers: [MenuAppComponent],
  bootstrap: [MenuAppComponent],
  exports: [MenuAppComponent],
})
export class MenuAppModule {}
