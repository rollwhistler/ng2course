import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/item';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @Output() onUpdated: EventEmitter<ListItem> = new EventEmitter<ListItem>()
  simpleForm: FormGroup; 
  
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.simpleForm = this.fb.group({
      id: this.fb.control(''),
      name: this.fb.control('')
    });
  }

  submit() {
    this.onUpdated.emit({
      id: this.simpleForm.get('id').value,
      name: this.simpleForm.get('name').value
    })
  }
}
