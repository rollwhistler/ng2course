import { Injectable } from '@angular/core';
import { ListItem } from '../models/item';
import { Observable } from 'rxjs/Observable';
//import { ADD_LISTITEM, LOAD_LISTITEMS, UPDATE_LISTITEM } from '../models/item.actions';
import { INCREMENT, DECREMENT, RESET, CounterState } from '../models/counter';
import { Store } from '@ngrx/store';

@Injectable()
export class SimpleService {

  public items: Observable<ListItem>;

  constructor(private store: Store<ListItem>) {
    this.items = store.select("items");
  }

  getAll() {
    return this.items;
  }

  get(id: number) {
    let item = this.items.find((el) => {
      return el.id == id;
    })

    if (!item) {
      item = {
        id: null,
        name: ''
      }
    }

    return item;
  }

  getNextId() {
    return this.items.reduce((max, current) => {
      if (max <= current.id) max = current.id + 1;
      return max;
    }, 1);
  }

  upsert(item: ListItem) {
    for (let i = 0; i < this.items.length; i++) {
      let current = this.items[i];
      if (current.id === item.id) {
        current.name = item.name;
        return;
      }
    }
    item.id = this.getNextId();
    this.items.push(item);
  }

}
