import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudeListComponent } from './gratitude-list.component';

describe('GratitudeListComponent', () => {
  let component: GratitudeListComponent;
  let fixture: ComponentFixture<GratitudeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
