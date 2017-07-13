import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { GratitudeDiaryService } from '../../services/gratitude-diary.service';
import * as fromRoot from '../../../state/root.reducer';
import * as ThoughtsActions from '../../state/thoughts.actions';
import { Thought } from '../../models/thought';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-diary',
  styleUrls: ['./gratitude-diary.component.scss'],
  template: `
    <app-gratitude-list
      [items]="thoughtList | async"
      (thoughtSubmitted)="createThought($event)"
    ></app-gratitude-list>

    <br />
    <hr />
    <br />

    <md-input-container>
      <input
        style="width: 250px;"
        placeholder="Your new happy thought"
        #newThought
        mdInput
      />
    </md-input-container>
    <br />
    <button
      type="button"
      md-raised-button
      [disabled]="newThought.value.length < 1"
      (click)="createThought(newThought.value)"
    >Add</button>
  `
})
export class GratitudeDiaryComponent implements OnInit {
  @ViewChild('newThought')
  newThought: ElementRef;
  thoughtList: Observable<Thought[]> = this.store.select(fromRoot.getThoughtList);

  constructor(
    private diaryService: GratitudeDiaryService,
    private store: Store<fromRoot.State>,
  ) {}

  ngOnInit() {
    this.store.dispatch(new ThoughtsActions.Load());

    this.diaryService.getThoughts()
      .subscribe(data => this.store.dispatch(new ThoughtsActions.LoadSuccess(data)));
  }

  createThought(text: string): void {
    this.store.dispatch(new ThoughtsActions.Add(text));
    this.newThought.nativeElement.value = '';
  }
}
