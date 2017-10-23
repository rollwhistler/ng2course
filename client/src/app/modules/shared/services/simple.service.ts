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
        item.name = model.name;
      }
    } else {
      model.id = this.getNextId();
      this.items.push(model);
    }
  }

  getNextId() {
    let maxId = 1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id > maxId) {
        maxId = this.items[i].id + 1;
      }
    }
    return maxId;
  }

}
