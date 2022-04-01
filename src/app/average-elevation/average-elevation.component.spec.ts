import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageElevationComponent } from './average-elevation.component';

describe('AverageElevationComponent', () => {
  let component: AverageElevationComponent;
  let fixture: ComponentFixture<AverageElevationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageElevationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageElevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
