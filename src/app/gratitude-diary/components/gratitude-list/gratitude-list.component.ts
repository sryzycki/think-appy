import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-list',
  styleUrls: ['./gratitude-list.component.scss'],
  template: `
    <h1>
      Gratitude list
    </h1>
    <md-list>
      <md-list-item>Item 1</md-list-item>
      <md-list-item>Item 2</md-list-item>
      <md-list-item>Item 3</md-list-item>
    </md-list>
  `
})
export class GratitudeListComponent { }
