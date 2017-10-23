import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @Input() model: ListItem;
  @Output() onUpdate: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  simpleForm: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {

    if (!this.model) this.model = { id: null, name: '' };

    this.simpleForm = this.fb.group({
      id: this.fb.control(this.model.id),
      name: this.fb.control(this.model.name)
    })
  }

  keyUp(evt) {
    if (evt.keyCode == 13) {
      this.submit();
    }
  }

  submit() {
    this.onUpdate.emit({
      id: this.simpleForm.get('id').value,
      name: this.simpleForm.get('name').value
    })
  }
}
