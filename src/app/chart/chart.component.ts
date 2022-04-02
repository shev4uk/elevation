import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AxisModel } from '../elevation/elevation.model';
import { ElevationState } from '../elevation/elevation.state';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {

  @Select(ElevationState.getXY) axisXY$: Observable<AxisModel>;

}
