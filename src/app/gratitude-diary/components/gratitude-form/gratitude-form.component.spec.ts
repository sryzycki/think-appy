import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudeFormComponent } from './gratitude-form.component';

describe('GratitudeFormComponent', () => {
  let component: GratitudeFormComponent;
  let fixture: ComponentFixture<GratitudeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
