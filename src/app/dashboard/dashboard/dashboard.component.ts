import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 0
  };

  constructor() { }

  ngOnInit() {}

}
