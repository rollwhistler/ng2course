import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/item';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @Output() onUpdated: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  @Input() item: ListItem;
  simpleForm: FormGroup; 
  
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.simpleForm = this.fb.group({
      name: this.fb.control(this.item.name)
    });
  }

  submit() {
    this.onUpdated.emit({
      id: this.item.id,
      name: this.simpleForm.get('name').value
    })
  }
}
