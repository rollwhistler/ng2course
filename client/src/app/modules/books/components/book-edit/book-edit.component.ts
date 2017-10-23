import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../../shared/services/simple.service';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from '../../../shared/models/list-item';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  public book: ListItem;
  public sub: any;

  constructor(public simpleService: SimpleService, public route: ActivatedRoute) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.book = this.simpleService.get(+params['id']);
    });
  }

  updated($event) {
    this.simpleService.upsert($event);
    window.history.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
