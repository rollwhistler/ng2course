import { Injectable } from '@angular/core';
import { ListItem } from '../models/list-item';

@Injectable()
export class SimpleService {
  items: ListItem[];

  constructor() {
    this.items = [];
  }

  getAll() {
    return this.items;
  }

  upsert(model: ListItem) {
    if (model.id) {
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i];
        if (item.id === model.id) {
          item.name = model.name;
        }
      }
    } else {
      model.id = this.getNextId();
      this.items.push(model);
    }
  }

  getNextId() {
    let maxId = 1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id >= maxId) {
        maxId = this.items[i].id + 1;
      }
    }
    return maxId;
  }

  get(id: number): ListItem {
    let item = {
      id: null,
      name: ''
    }

    if (id) {
      for (let i = 0; i < this.items.length; i++) {
        let current = this.items[i];
        if (current.id === id) {
          return current;
        }
      }
    }
    return item;
  }
}
