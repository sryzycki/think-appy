import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Thought } from '../models/thought';
import { generateId } from '../../utils/index';

@Injectable()
export class GratitudeDiaryService {
  public constructor(
    private db: AngularFireDatabase,
  ) {}

  public fetchThoughts(): FirebaseListObservable<Thought[]> {
    return this.db.list('/gratitudes');
  }

  public createThought(text: string): Observable<Thought> {
    const newThought = {
      id: generateId(),
      text,
      timestamp: Date.now(),
    };

    this.fetchThoughts().push(newThought);

    return Observable.of(newThought);
  }
}
