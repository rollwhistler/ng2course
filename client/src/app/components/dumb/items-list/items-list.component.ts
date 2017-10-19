import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent {
  @Input() items: User[];
  @Output() onRemoveItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  removeItem(index) {
    this.onRemoveItem.emit(index);
  }

}
