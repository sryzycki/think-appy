import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Thought } from '../models/thought';
import { generateId } from '../../utils/index';

@Injectable()
export class GratitudeDiaryService {
  public constructor(
    private db: AngularFireDatabase,
  ) {}

  public createThought(text: string): Observable<Thought> {
    const newThought = {
      id: generateId(),
      text,
      timestamp: Date.now(),
    };

    return Observable.create((observer: Observer<Thought>) => {
      this.fetchThoughtList()
        .push(newThought)
        .then(() => observer.next(newThought))
        .catch((error: any) => observer.error(error))
    });
  }

  public readThoughts(): FirebaseListObservable<Thought[]> {
    return this.fetchThoughtList();
  }

  private fetchThoughtList(): FirebaseListObservable<Thought[]> {
    return this.db.list('/gratitudes');
  }
}
