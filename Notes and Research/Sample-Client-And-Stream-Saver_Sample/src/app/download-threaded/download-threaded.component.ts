import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User, UserService } from '../core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'download-threaded-component',
  templateUrl: './download-threaded.component.html'
})
export class DownloadThreadedComponent implements OnInit {
 
  @Input() item: any;

  titleEvent;
  items: MenuItem[];
  expanded = false;
  value: number = 0;
  constructor(

  ) {
  }

  ngOnInit() {
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

  
}
