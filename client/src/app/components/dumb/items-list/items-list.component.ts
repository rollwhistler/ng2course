import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  @Input() items: string[];
  @Output() onRemoveItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  removeItem(index) {
    this.onRemoveItem.emit(index);
  }

}
