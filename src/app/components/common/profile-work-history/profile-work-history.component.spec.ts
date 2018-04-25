import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWorkHistoryComponent } from './profile-work-history.component';

describe('ProfileWorkHistoryComponent', () => {
  let component: ProfileWorkHistoryComponent;
  let fixture: ComponentFixture<ProfileWorkHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileWorkHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
