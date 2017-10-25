import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../../shared/models/item';
import { SimpleService } from '../../../shared/services/simple.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  item: ListItem;
  title: string = "User Edit";

  constructor(public ss: SimpleService, public route: ActivatedRoute) {
    this.item = {
      id: null,
      name: ''
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.item = this.ss.get(+params.id);
    });

    this.route.queryParams.subscribe((params) => {
      if(params.title) this.title = params.title;
    });

  }

  updated(item: ListItem) {
    this.ss.upsert(item);
    window.history.back();
  }

}
