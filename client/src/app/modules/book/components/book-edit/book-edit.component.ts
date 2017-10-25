import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../../shared/services/simple.service';
import { ListItem } from '../../../shared/models/item';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(public ss: SimpleService) { }

  ngOnInit() {
  }

  updated(item: ListItem) {
    this.ss.upsert(item);
    window.history.back();
  }

}
