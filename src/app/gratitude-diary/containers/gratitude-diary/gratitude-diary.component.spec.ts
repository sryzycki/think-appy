import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import { CoreModule } from '../../../core/core.module';

import * as fromGratitudeDiaryReducers from '../../state/gratitude-diary.reducers';
import * as fromThoughtsActions from '../../state/thoughts.actions';
import { GratitudeDiaryComponent } from './gratitude-diary.component';

fdescribe('GratitudeDiaryComponent', () => {
  let component: GratitudeDiaryComponent;
  let fixture: ComponentFixture<GratitudeDiaryComponent>;
  let store: Store<fromGratitudeDiaryReducers.State>;
  let el: DebugElement;
  let progressBarEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeDiaryComponent ],
      imports: [
        StoreModule.forRoot({
          [fromGratitudeDiaryReducers.gratitudeDiaryReducerFractal]: combineReducers(fromGratitudeDiaryReducers.reducers),
        }),
        CoreModule,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select').and.callThrough();

    fixture = TestBed.createComponent(GratitudeDiaryComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    progressBarEl = el.query(By.css('md-progress-bar'));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show progress bar when loading items', () => {
    const action: fromThoughtsActions.Actions = fromThoughtsActions.LoadAction;

    console.log(progressBarEl);

    store.dispatch(action);

    console.log(progressBarEl);
  })
});
