import { Component, OnInit } from '@angular/core';
import { CalendarDataService } from '../services/calendar-data.service';
import { getData } from './test.js'
import '../fullcalendar/packages/core/main'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.addEventListener('DOMContentLoaded', function() {
    // var calendarEl = document.getElementById('calendar');

    // var calendar = new Calendar(calendarEl, {
    //   plugins: [ dayGridPlugin ]
    // });

    //   calendar.render();
    // });
    getData();
  }
}
