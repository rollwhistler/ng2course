import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.css"]
})
export class ExampleComponent implements OnInit {
  @Input() initial: number;
  @Output() onUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  click() {
    this.initial++;
    this.onUpdate.emit(this.initial);
  }

  ngOnInit() {}
}
