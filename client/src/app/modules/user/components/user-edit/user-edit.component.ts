import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../../shared/models/item';
import { SimpleService } from '../../../shared/services/simple.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(public ss: SimpleService) { }

  ngOnInit() {
  }

  updated(item: ListItem) {
    this.ss.upsert(item);
  }

}
