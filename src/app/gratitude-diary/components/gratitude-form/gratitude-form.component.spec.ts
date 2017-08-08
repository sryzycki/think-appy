import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CoreModule } from '../../../core/core.module';

import { GratitudeFormComponent } from './gratitude-form.component';

describe('GratitudeFormComponent', () => {
  let fixture: ComponentFixture<GratitudeFormComponent>;
  let component: GratitudeFormComponent;
  let el: DebugElement;
  let buttonEl: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeFormComponent ],
      imports: [
        NoopAnimationsModule,
        FormsModule,
        CoreModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudeFormComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    buttonEl = el.query(By.css('button')).nativeElement;

    component.text = Observable.of('');
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not emit empty gratitude', () => {
    spyOn(component.added, 'emit');

    fixture.whenStable().then(() => {
      buttonEl.click();

      expect(component.added.emit).not.toHaveBeenCalled();
    })
  });

  it('should emit a valid gratitude', () => {
    spyOn(component.added, 'emit');
    component.text = Observable.of('Gratitude text!');
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      buttonEl.click();

      expect(component.added.emit).toHaveBeenCalledWith('Gratitude text!');
    });
  });
});
