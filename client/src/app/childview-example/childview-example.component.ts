import {
  Component, OnInit, Input, ElementRef, Output, EventEmitter,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-childview-example',
  templateUrl: './childview-example.component.html',
  styleUrls: ['./childview-example.component.css']
})
export class ChildviewExampleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input() initial: string;
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public currentHeight: number;

  constructor(public textRef: ElementRef) { }

  //Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
  ngOnChanges(e) {
    console.log("On Changes: ");
    console.log(JSON.stringify(e));
  }

  //Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.
  ngOnInit() {
    this.currentHeight = 0;
    console.log("On Init");
  }

  //Detect and act upon changes that Angular can't or won't detect on its own.
  ngDoCheck() {
    console.log("Do Check");
  }

  //Respond after Angular projects external content into the component's view.
  ngAfterContentInit() {
    console.log("After Content Init");
  }

  //Respond after Angular checks the content projected into the component.
  ngAfterContentChecked() {
    console.log("After Content Checked");
  }
  //Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks
  ngOnDestroy() {
    console.log("On Destroy");
  }

  keyUp(event) {
    const height = event.target.scrollHeight;
    if (height !== this.currentHeight) {
      this.currentHeight = height;
      this.onChange.emit(true);
    }
  }

}
