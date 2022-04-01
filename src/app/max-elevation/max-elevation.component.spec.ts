import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxElevationComponent } from './max-elevation.component';

describe('MaxElevationComponent', () => {
  let component: MaxElevationComponent;
  let fixture: ComponentFixture<MaxElevationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxElevationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxElevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
