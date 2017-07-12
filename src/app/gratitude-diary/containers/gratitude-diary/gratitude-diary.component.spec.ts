import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudeDiaryComponent } from './gratitude-diary.component';

describe('GratitudeDiaryComponent', () => {
  let component: GratitudeDiaryComponent;
  let fixture: ComponentFixture<GratitudeDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudeDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
