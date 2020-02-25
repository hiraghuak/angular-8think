import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsCoachingComponent } from './mentors-coaching.component';

describe('MentorsCoachingComponent', () => {
  let component: MentorsCoachingComponent;
  let fixture: ComponentFixture<MentorsCoachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsCoachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
