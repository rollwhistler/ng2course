import { Injectable } from '@angular/core';
import { INCREMENT, DECREMENT, RESET, CounterState } from '../models/counter';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CounterService {
  public counter: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.counter = store.select('counter');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

}
