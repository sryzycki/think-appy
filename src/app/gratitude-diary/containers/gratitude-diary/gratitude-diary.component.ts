import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-diary',
  styleUrls: ['./gratitude-diary.component.scss'],
  template: `
    <p>
      <app-gratitude-list></app-gratitude-list>
    </p>
  `
})
export class GratitudeDiaryComponent implements OnInit {
  constructor() { console.log('dupa')}

  ngOnInit() { }
}
