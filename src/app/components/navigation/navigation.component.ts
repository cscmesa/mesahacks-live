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

  constructor (private httpService: HttpClient) { }
  public textArr: string [];
  public hours: number;
  public minutes: number;
  public seconds: number;
  public past: any;
  public upcoming: any;
  public now: any;
  public distance: number;
  private countDownDate = new Date("June 1, 2018, 19:00:00").getTime();

  ngOnInit() {
    Observable.interval(1000).map((x) => {
      this.now = new Date().getTime();
      this.distance = this.countDownDate - this.now;
      if (this.distance <= 0) {
        clearInterval(x);
        $('#countdown').html("<h1> Time's Up! </h1>");
      }
    }).subscribe((x) => {
      this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
    });

    this.httpService.get('./assets/schedule.json').subscribe(
      data => {
        this.textArr = data as string [];
        for (let item of this.textArr) {
          this.past = new Date("2018-06-01T10:31:00");
          this.upcoming = new Date(this.past.getTime() + 5400000);
          item.ISOTime = new Date(item.Time);
          item.Time = new Date(item.Time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
