import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AFUnwrappedDataSnapshot } from 'angularfire2/interfaces';

import { generateId } from '../../utils/index';
import { Thought } from '../models/thought';

@Injectable()
export class GratitudeDiaryService {
  private thoughtList$: FirebaseListObservable<Thought[]> = this.db.list('/gratitudes');

  public static getNewThought(text = ''): Thought {
    return {
      id: generateId(),
      text,
      timestamp: Date.now(),
    };
  }

  public constructor(
    private db: AngularFireDatabase,
  ) {}

  public createThought(newThoughtText: string): Observable<Thought> {
    const newThought: Thought = GratitudeDiaryService.getNewThought(newThoughtText);

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
