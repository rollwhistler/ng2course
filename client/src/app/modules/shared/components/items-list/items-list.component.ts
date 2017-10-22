import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() items: ListItem[];
  constructor() { }

  ngOnInit() {
  }

}
