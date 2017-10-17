import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childview-example',
  templateUrl: './childview-example.component.html',
  styleUrls: ['./childview-example.component.css']
})
export class ChildviewExampleComponent implements OnInit {
  @Input() initial: string;
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public currentHeight: number;

  constructor(public textRef: ElementRef) { }

  ngOnInit() {
    this.currentHeight = 0;
  }

  keyUp(event) {
    const height = event.target.scrollHeight;
    if (height !== this.currentHeight) {
      this.currentHeight = height;
      this.onChange.emit(true);
    }
  }

}
