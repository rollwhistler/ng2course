import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/list-item';
import { SimpleService } from '../../../shared/services/simple.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: ListItem[];

  constructor(public simpleService: SimpleService, public router: Router) {
    this.users = this.simpleService.getAll();
  }

  ngOnInit() {
  }

  update(model: ListItem) {
    this.simpleService.upsert(model);
  }

  edit(item: ListItem) {
    this.router.navigate(['user-edit', item.id]);
  }
}
