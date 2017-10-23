import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../../shared/services/simple.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(public simpleService: SimpleService) { }

  ngOnInit() {
  }

  updated($event) {
    this.simpleService.upsert($event);
  }
}
