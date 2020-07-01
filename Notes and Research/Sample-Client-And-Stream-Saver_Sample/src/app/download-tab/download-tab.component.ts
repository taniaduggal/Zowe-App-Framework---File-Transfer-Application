import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User, UserService } from '../core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'download-tab-component',
  templateUrl: './download-tab.component.html'
})
export class DownloadTabComponent implements OnInit {
 

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
    status: "Done",
    progress: "75"
  },
  {
    fileName: "some datafile",
    type: "bnary",
    size: "1200000",
    transfertime: "00.012.21.0",
    status: "Cancel",
    progress: "75"
  },
  {
    fileName: "some datafile",
    type: "bnary",
    size: "1200000",
    transfertime: "00.012.21.0",
    status: "Errored",
    progress: "75"
  }];


  systems = [
    {
      name: 'SystemName1',
      ip: '270.19.20.1',
      type: 'Http',
      user: "JaeSmith",
      status: "Active"
    },
    {
      name: 'SystemName2',
      ip: '270.19.20.1',
      type: 'Http',
      user: "JaeSmith",
      status: "Queued"
    },
    {
      name: 'SystemName3',
      ip: '270.19.20.1',
      type: 'Http',
      user: "JaeSmith",
      status: "Queued"
    },
    {
      name: 'SystemName4',
      ip: '270.19.20.1',
      type: 'Http',
      user: "JaeSmith",
      status: "Errored"
    },
    {
      name: 'SystemName5',
      ip: '270.19.20.1',
      type: 'Http',
      user: "JaeSmith",
      status: "Silent"
    }
  ]

  index: number = 0;
  titleEvent;
  items: MenuItem[];
  expanded = false;
  value: number = 0;
  selectedName;

  constructor(

  ) {
  }

  ngOnInit() {
    this.titleEvent="DONE";
    this.selectedName = "SystemName1"

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

  setConnections(name){

    this.selectedName = name;

  }
}
