import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AFUnwrappedDataSnapshot } from 'angularfire2/interfaces';

import { Thought } from '../models/thought';
import { generateId } from '../../utils/index';

@Injectable()
export class GratitudeDiaryService {
  private thoughtList$: FirebaseListObservable<Thought[]> = this.db.list('/gratitudes');

  public constructor(
    private db: AngularFireDatabase,
  ) {}

  public createThought(text: string): Observable<Thought> {
    const newThought: Thought = {
      id: generateId(),
      text,
      timestamp: Date.now(),
    };

    return Observable.create((observer: Observer<Thought>) => {
      this.thoughtList$
        .push(newThought)
        .then(() => observer.next(newThought))
        .catch((error: any) => observer.error(error))
    });
  }

  public readThoughts(): FirebaseListObservable<Thought[]> {
    return this.thoughtList$;
  }

  public deleteThought(item: Thought|AFUnwrappedDataSnapshot): Observable<Thought> {
    const delete$ = Observable.fromPromise(this.thoughtList$.remove((<AFUnwrappedDataSnapshot>item).$key));

    return delete$
      .switchMap(() => Observable.of(item));
  }
}
