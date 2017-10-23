import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../../shared/services/simple.service';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from '../../../shared/models/list-item';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: ListItem;
  public sub: any;

  constructor(public simpleService: SimpleService, public route: ActivatedRoute) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.user = this.simpleService.get(+params['id']);
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
