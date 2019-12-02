import { Component, OnInit } from '@angular/core';
import { CalendarDataService } from '../services/calendar-data.service';
//import * as SportsFeed from '../sports-feed/sports-feed.js';
//import { getData } from '../../app/sports-feed/sports-feed.js'
import { getData } from './test.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    getData();
  }
}
