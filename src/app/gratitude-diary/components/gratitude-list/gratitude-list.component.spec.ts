import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CoreModule } from '../../../core/core.module';
import { Thought } from '../../models/thought';
import { GratitudeDiaryService } from '../../services/gratitude-diary.service';
import { GratitudeListComponent } from './gratitude-list.component';

@Component({
  selector: 'app-host',
  template: `
    <app-gratitude-list
      [items]="list"
      (deleted)="handleDelete($event)"
    ></app-gratitude-list>
  `,
})
class HostComponent {
  list: Thought[] = [
    GratitudeDiaryService.getNewThought('First'),
    GratitudeDiaryService.getNewThought('Second'),
    GratitudeDiaryService.getNewThought('Third'),
  ];

  public handleDelete() {}
}

describe('GratitudeListComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let el: DebugElement;
  let gratitudeItems: DebugElement[];
  let deleteBtnEl: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostComponent, GratitudeListComponent ],
      imports: [ CoreModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input list', () => {
    gratitudeItems = el.queryAll(By.css('md-list-item'));

    expect(gratitudeItems.length).toBe(3);
  });

  it('should emit the deleted thought', () => {
    spyOn(component, 'handleDelete').and.callThrough();
    deleteBtnEl = el.query(By.css('button')).nativeElement;
    deleteBtnEl.click();

    expect(component.handleDelete).toHaveBeenCalledWith(component.list[0]);
  });
});
