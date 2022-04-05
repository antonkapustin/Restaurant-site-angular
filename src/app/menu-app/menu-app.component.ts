import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-app',
  templateUrl: './menu-app.component.html',
  styleUrls: ['./menu-app.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuAppComponent implements OnInit {
  name = '';
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.navigate(['menu/food']);
  }
}
