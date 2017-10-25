import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/item';
import { SimpleService } from '../../../shared/services/simple.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: ListItem[];

  constructor(public ss: SimpleService, public router: Router) {
  }

  update(item: ListItem) {
    this.router.navigate(['/user-edit', item.id]);
  }
  
  ngOnInit() {  
    this.users = this.ss.getAll();
  }

}
