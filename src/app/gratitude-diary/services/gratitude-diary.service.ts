import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Thought } from '../models/thought';
import { generateId } from '../../utils/index';

@Injectable()
export class GratitudeDiaryService {
  // TODO: Move this state over to a database.
  thoughts: Thought[] = [];

  public constructor() {}

  public fetchThoughts(): Observable<Thought[]> {
    return Observable.of(this.thoughts);
  }

  public createThought(text: string): Observable<Thought> {
    const newThought = {
      id: generateId(),
      text,
      timestamp: Date.now(),
    };

    this.thoughts = [ ...this.thoughts, newThought ];

    return Observable.of(newThought);
  }
}
