import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnChanges{
  @Input() items: string[];
  @Output() onRemoveItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(evt) {
    console.log(evt);
  }
  removeItem(index) {
    this.onRemoveItem.emit(index);
  }

}
