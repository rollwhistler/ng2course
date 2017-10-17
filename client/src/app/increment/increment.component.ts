import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'app-increment',
    templateUrl: 'increment.component.html'
})
export class IncrementComponent implements OnInit {
    @Input() initial: number;
    @Output() onUpdate: EventEmitter<number> = new EventEmitter<number>();
    currentValue: number;

    constructor() {}

    ngOnInit() {
        this.currentValue = this.initial;
    }

    click() {
        this.currentValue++;
        this.onUpdate.emit(this.currentValue);
    }
}
