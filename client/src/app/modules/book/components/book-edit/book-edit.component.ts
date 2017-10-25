import { Component, OnInit, OnDestroy } from '@angular/core';
import { SimpleService } from '../../../shared/services/simple.service';
import { ListItem } from '../../../shared/models/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy {
  item: ListItem;
  sub: any;

  constructor(public ss: SimpleService, public route: ActivatedRoute) {
    this.item = {
      id: null,
      name: ''
    }
  }

  ngOnInit() {
    this.sub = this.route.params;
    this.sub.subscribe((params) => {
      this.item = this.ss.get(+params.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updated(item: ListItem) {
    this.ss.upsert(item);
    window.history.back();
  }

}
