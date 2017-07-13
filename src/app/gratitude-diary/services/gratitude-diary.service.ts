import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Thought } from '../models/thought';

@Injectable()
export class GratitudeDiaryService {
  thoughts: Thought[] = [
    { id: '1', text: 'A thought' },
    { id: '2', text: 'A thought no 2' },
    { id: '3', text: 'A thought no 3' },
  ];

  constructor() {}

  getThoughts(): Observable<Thought[]> {
    return Observable.of(this.thoughts);
  }
}
