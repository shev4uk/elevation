import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { FetchAllElevation } from './elevation/elevation.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  loading = false;
  loaded = false;
  constructor(private store: Store) {}

  requestData() {
    this.loading = true;
    this.store.dispatch(new FetchAllElevation()).subscribe((res) => {
      this.loading = false;
      this.loaded = true;
    });
  }
}
