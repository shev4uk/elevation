import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-max-elevation',
  templateUrl: './max-elevation.component.html',
  styleUrls: ['./max-elevation.component.scss']
})
export class MaxElevationComponent implements OnInit {

  max$: Observable<number>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.max$ = this.store.select(state => {
      return Math.max(...state.elevation.data.y)
    })
  }

}
