import { Component, AfterViewInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-live-home',
  templateUrl: './live-home.component.html',
  styleUrls: ['./live-home.component.scss']
})
export class LiveHomeComponent implements AfterViewInit {

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.get('http://c3c5acba.ngrok.io', options)
    .subscribe(data => {
      console.log(data);
    }, error => {
      // console.log(error);
    })
  }

}
