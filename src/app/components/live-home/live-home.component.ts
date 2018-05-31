import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-live-home',
  templateUrl: './live-home.component.html',
  styleUrls: ['./live-home.component.scss']
})
export class LiveHomeComponent implements OnInit {

  constructor() { }

  announcements = [
  'Use code MesaHacks2018 on Twilio for $25 of starting credit!',
  'Make sure you join our Slack workspace for the latest updates!',
  'Have you started your TwilioQuest? Check out the Prizes section for the link!',
  "Stuck on your code? Don't know what to do next? Ask a mentor in our #help channel on Slack!",
  "Don't forget! Hacking ends at 7:30PM!"
  ];
  msg: string;
  index: number;


  ngOnInit() {
    this.index = Math.floor(Math.random() * this.announcements.length);
    Observable.interval(30000).startWith(0).subscribe(x => {
      if (this.index >= this.announcements.length) {
        this.index = 0;
      }
      this.msg = this.announcements[this.index];
      this.index += 1;
    });

  }

  passShow() {
    $('#pass').html('mesaspring2018');
    $('#pass').removeClass('pass');
  }

}
