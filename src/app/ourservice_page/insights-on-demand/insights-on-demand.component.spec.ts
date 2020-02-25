import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsOnDemandComponent } from './insights-on-demand.component';

describe('InsightsOnDemandComponent', () => {
  let component: InsightsOnDemandComponent;
  let fixture: ComponentFixture<InsightsOnDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsOnDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsOnDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
