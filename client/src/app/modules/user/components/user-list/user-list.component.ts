import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/item';
import { SimpleService } from '../../../shared/services/simple.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: ListItem[];

  constructor(public ss: SimpleService) {
   }

  ngOnInit() {  
    this.users = this.ss.getAll();
  }

}
