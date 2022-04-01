import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-average-elevation',
  templateUrl: './average-elevation.component.html',
  styleUrls: ['./average-elevation.component.scss']
})
export class AverageElevationComponent implements OnInit {

  average$: Observable<number>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.average$ = this.store.select(state => {
      const sumElevation = state.elevation.data.y.reduce((acc: number, item: number) => {
        return acc + item
      }, 0)
      return sumElevation / state.elevation.data.y.length
    })
  }

}
