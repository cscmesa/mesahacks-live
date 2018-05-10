import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LiveHomeComponent } from './components/live-home/live-home.component';
import { MapComponent } from './components/map/map.component';
import { PrizesComponent } from './components/prizes/prizes.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ApisComponent } from './components/apis/apis.component';

const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LiveHomeComponent},
  {path: 'map', component: MapComponent},
  {path: 'prizes', component: PrizesComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'apis', component: ApisComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LiveHomeComponent,
    MapComponent,
    PrizesComponent,
    ScheduleComponent,
    NavigationComponent,
    ApisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
