import { Component, OnInit } from '@angular/core';

import { UserService } from './core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService
  ) {}

  list = [{
    fileName: "some datafile",
    type: "bnary",
    size: "1200000",
    transfertime: "00.012.21.0",
    status: "In progress",
    progress: "75"
  },
  {
    fileName: "some datafile",
    type: "bnary",
    size: "1200000",
    transfertime: "00.012.21.0",
    status: "In progress",
    progress: "75"
  },
  {
    fileName: "some datafile",
    type: "bnary",
    size: "1200000",
    transfertime: "00.012.21.0",
    status: "In progress",
    progress: "75"
  },
  {
    fileName: "some datafile",
    type: "bnary",
    size: "1200000",
    transfertime: "00.012.21.0",
    status: "In progress",
    progress: "75"
  }];
  index: number = 0;
  titleEvent;
  items: MenuItem[];
  expanded = false;
  value: number = 0;
  ngOnInit() {
    this.userService.populate();
    this.titleEvent="DONE";

    this.items = [
      {label: 'Cancel', icon: 'pi pi-times'},
  ];

    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if(this.value >= 100) {
          this.value = 100;
          clearInterval(interval);
      }
  }, 2000);
  }

  openNext() {
      this.index = (this.index === 1) ? 0 : this.index + 1;
  }

  openPrev() {
      this.index = (this.index === 0) ? 1 : this.index - 1;
  }
}
