import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { FetchAllElevation } from './elevation.action';
import { AxisModel } from './elevation.model';
import { ElevationService } from './elevation.service';

export interface ElevationStateModel {
  data: AxisModel;
}

@State<ElevationStateModel>({
  name: 'elevation',
  defaults: {
    data: {
        x: [],
        y: []
    },
  },
})
@Injectable()
export class ElevationState {
  constructor(private elevationService: ElevationService) {}

  @Selector()
  static getXY(state: ElevationStateModel) {
    return state.data;
  }

  @Action(FetchAllElevation)
  FetchAllElevation({getState, setState}: StateContext<ElevationStateModel>) {
    return this.elevationService.getAllData().pipe(tap((result) => {
        const state = getState();
        let x: number[] = [];
        let y: number[] = [];
        result.results[0].value.features[0].geometry.paths[0].forEach((val: number[]) => {
            x.push(val[0]);
            y.push(val[2]);
        });
        setState({
            ...state,
            data: {
                x,
                y
            }
        });
    }));
  }
}
