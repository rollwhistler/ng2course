import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../../shared/services/simple.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(public simpleService: SimpleService) { }

  ngOnInit() {
  }

  updated($event) {
    this.simpleService.upsert($event);
    window.history.back();
  }
}
