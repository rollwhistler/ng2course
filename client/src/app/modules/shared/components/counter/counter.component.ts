import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() value: number;
  @Output() onIncrement: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onDecrement: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.onIncrement.emit(true);
  }

  decrement() {
    this.onDecrement.emit(true);
  }

}
