import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Output() onClick: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  @Input() items: ListItem[];
  constructor() { }

  ngOnInit() {
  }

  click(item) {
    this.onClick.emit(item);
  }

}
