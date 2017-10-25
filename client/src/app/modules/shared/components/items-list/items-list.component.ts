import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  
  @Input() items: ListItem[];
  @Output() onUpdated: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  constructor() { }

  click(index: number) {
    this.onUpdated.emit(this.items[index]);
  }

  ngOnInit() {
  }

}
