import { Component, OnInit } from '@angular/core';
import { ConnectingService } from "./../connecting.service";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';


export interface Tile {
  
  cols: number;
  rows: number;
  text: string;
  color: string;
}

@Component({
  selector: 'app-tabber',
  templateUrl: './tabber.component.html',
  styleUrls: ['./tabber.component.css']
})
export class TabberComponent implements OnInit {
  
  showOrHide1: boolean = true;
  showOrHide2: boolean = false;
  showOrHide3: boolean = false;
  showOrHide4: boolean = false;
  showOrHide5: boolean = false;
  tiles: Tile[] = [
    { text: "We hear you on the stress of running your own business!", cols: 1, rows: 1, color: 'red'},
    { text: "This software is intended to reduce the business and accounting work necessary to run a landscaping company.", cols: 1, rows: 1 , color: 'red'},
    {
      text:
        "A business can be forced to hire extra employees for accounting and business upkeep work.",
      cols: 1,
      rows: 1, color: 'red'
    },
    {
      text:
        "Using this software, these repeated business management expenses can be avoided, thus leading to long-term savings for the company. ",
      cols: 1,
      rows: 1, color: 'red'
    },
    

    { text: "", cols: 1, rows: 1, color: 'red' },
    {
      text:
        "",
      cols: 1,
      rows: 1, color: 'red'
    },
    {
      text:
        "",
      cols: 1,
      rows: 1, color: 'red'
    },
    { text: "", cols: 1, rows: 1 , color: 'red'},

    { text: "In addition, humans introduce the aptly named “human errors”, whereas in properly coded software.", cols: 1, rows: 1 , color: 'red'},
    { text: "Errors in the processing of this type of work are eliminated.", cols: 1, rows: 1 , color: 'red'},
    { text: "This can lead to saved time and money, as each error can lead to confusion and sometimes even legal troubles.", cols: 1, rows: 1, color: 'red' },
    { text: "In addition, the system can have timing and/or requirements reminders, preventing late or overdue submissions of legal work, company payments, and more!", cols: 1, rows: 1 , color: 'red'}
  ];
  


  onClick1() {
   this.showOrHide1 = true;
   this.showOrHide2 = false;
   this.showOrHide3 = false;
   this.showOrHide4 = false;
   this.showOrHide5 = false;
  }
  onClick2() {
    this.showOrHide2 = true;
    this.showOrHide1 = false;
   this.showOrHide3 = false;
   this.showOrHide4 = false;
   this.showOrHide5 = false;
  }
  onClick3() {
    this.showOrHide3 = true;
    this.showOrHide2 = false;
   this.showOrHide1 = false;
   this.showOrHide4 = false;
   this.showOrHide5 = false;
  }
  onClick4() {
    this.showOrHide4 = true;
    this.showOrHide2 = false;
   this.showOrHide3 = false;
   this.showOrHide1 = false;
   this.showOrHide5 = false;
  }
  onClick5() {
    this.showOrHide5 = true;
    this.showOrHide2 = false;
   this.showOrHide3 = false;
   this.showOrHide4 = false;
   this.showOrHide1 = false;
  }
  constructor(private acctService: ConnectingService) { }

  ngOnInit(): void {this.acctService.statusEdited1.subscribe(
    (id: boolean) => (this.showOrHide1 = id)
  );
  this.acctService.statusEdited2.subscribe(
    (id: boolean) => (this.showOrHide2 = id)
  );
  this.acctService.statusEdited3.subscribe(
    (id: boolean) => (this.showOrHide3 = id)
  );
  this.acctService.statusEdited4.subscribe(
    (id: boolean) => (this.showOrHide4 = id)
  );
  this.acctService.statusEdited5.subscribe(
    (id: boolean) => (this.showOrHide5 = id)
  );
  }
}
