import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const slackWebHookUrl = 'https://hooks.slack.com/services/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'
const httpOptions = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  constructor(private http: HttpClient, private router: Router) { }

  onNameKeyUp(event:any) {
  this.input = event.target.value;
  }
  getMsg() {
    console.log(this.router.url);
    this.http.get('https://cscmesa.com/dist/map')
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    );
  }
}
