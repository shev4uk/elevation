import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from  '@angular/common/http';
import { ElevationState } from './elevation/elevation.state';
import { NgChartsModule } from 'ng2-charts';
import { AverageElevationComponent } from './average-elevation/average-elevation.component';
import { MaxElevationComponent } from './max-elevation/max-elevation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    AverageElevationComponent,
    MaxElevationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([ElevationState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
