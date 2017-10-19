import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  @Output() onAddUser: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  keyup(event: any) {
    if (event.keyCode == 13) {
      this.onAddUser.emit(event.target.value);
      event.target.value = "";
    }
  }

}
