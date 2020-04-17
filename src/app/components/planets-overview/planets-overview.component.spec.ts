import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsOverviewComponent } from './planets-overview.component';

describe('PlanetsOverviewComponent', () => {
  let component: PlanetsOverviewComponent;
  let fixture: ComponentFixture<PlanetsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
