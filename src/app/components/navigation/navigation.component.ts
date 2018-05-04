import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements AfterViewInit {

  ngAfterViewInit() {
    var countDownDate = new Date("June 1, 2018, 19:00:00").getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var text = $('#hours').html();
      $('#hours').text(hours);
      text = $('#minutes').html();
      $('#minutes').text(minutes);
      text = $('#seconds').html();
      $('#seconds').text(seconds);

      if (distance <= 0) {
        clearInterval(x);
        $('#countdown').html("<h1> Time's Up! </h1>");
      }
    }, 1000);
  }

}
