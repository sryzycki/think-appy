import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';

@Component({
  selector: 'app-test',
  template: `
    <app-page-header>
      Projected!
    </app-page-header>
  `,
})
class TestComponent {}

describe('PageHeaderComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, PageHeaderComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should project the text', () => {
    expect(fixture.nativeElement.textContent).toContain('Projected!');
  });
});
