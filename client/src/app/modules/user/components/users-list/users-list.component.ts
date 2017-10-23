import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/list-item';
import { SimpleService } from '../../../shared/services/simple.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: ListItem[];

  constructor(public simpleService: SimpleService) {
    this.users = this.simpleService.getAll();
  }

  ngOnInit() {
  }

  update(model: ListItem) {
    this.simpleService.upsert(model);
  }

}
