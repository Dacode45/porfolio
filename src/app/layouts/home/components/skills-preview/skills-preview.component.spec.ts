import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPreviewComponent } from './skills-preview.component';

describe('SkillsPreviewComponent', () => {
  let component: SkillsPreviewComponent;
  let fixture: ComponentFixture<SkillsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
