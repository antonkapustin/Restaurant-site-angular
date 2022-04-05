import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    console.log(this.route);
  }

  ngOnInit(): void {}
}
