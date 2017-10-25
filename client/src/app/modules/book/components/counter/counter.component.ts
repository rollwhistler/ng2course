import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../shared/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  value: number;

  constructor(public cs: CounterService) { }

  ngOnInit() {
    this.cs.counter.subscribe((v) => {
      this.value = v;
    })
  }

  increment() {
    this.cs.increment();
  }

  decrement() {
    this.cs.decrement();
  }

}
