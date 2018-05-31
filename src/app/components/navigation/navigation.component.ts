import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit{

  constructor () { }

  public hours: number;
  public minutes: number;
  public seconds: number;

  public now: any;
  public time: any;
  public past: any;
  public upcoming: any;

  public schedule: any;
  public distance: number; // 9 hours

  public navCollapsed = false;

  private start = false;
  private startTime = new Date("June 1, 2018, 10:30:00").getTime();
  private endTime = new Date("June 1, 2018, 19:30:00").getTime();

  ngOnInit() {

  const scheduleJSON = [
      {
        "Title" : "Opening Ceremony",
        "Room" : "Mesa Commons",
        "msTime" : 1527872400000,
        "Time" : ""
      },
      {
        "Title" : "Intro to Twilio API Workshop",
        "Room" : "MC211 A/B",
        "msTime" : 1527885000000,
        "Time" : ""
      },
      {
        "Title" : "Getting Started with Arduino Workshop",
        "Room" : "MC211 A/B",
        "msTime" : 1527888600000,
        "Time" : ""
      },
      {
        "Title" : "Closing Ceremony",
        "Room" : "Mesa Commons",
        "msTime" : 1527910200000,
        "Time" : ""
      }
    ];

    this.schedule = JSON.parse(JSON.stringify(scheduleJSON));

    Observable.interval(1000).startWith(0).subscribe((x) => {
      for (let item of this.schedule) {
        item.Time = new Date(item.msTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      }
      this.past = new Date("June 1, 2018, 10:00:00");
      this.upcoming = new Date(this.past.getTime() + 5400000).getTime();
      this.past = this.past.getTime(); // Converted to ms for view logic
    });

    Observable.interval(1000).startWith(0).subscribe((x) => {
      this.now = new Date().getTime();
      console.log(this.now, this.startTime, this.start)
      if (this.startTime < this.now) {
        this.start = true;
      }
      if (this.start == true) {
        this.distance = this.endTime - this.now;
      } else {
        this.distance = this.endTime - this.startTime;
      }
      if (this.distance < 0) {
        clearInterval(x);
        $('#countdown').html("<h1> Time's Up! </h1>");
      }
      this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

    });
  }

  toggleNav() {
    this.navCollapsed = !this.navCollapsed;
  }

}
