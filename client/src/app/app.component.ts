import { Component, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildviewExampleComponent } from './childview-example/childview-example.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  title = 'app';
  numCopies = 3;
  currentHeight = 0;
  initial = "Ola K Ase";
  @ViewChild(ChildviewExampleComponent) childRef: ChildviewExampleComponent;

  newHeight() {
    this.currentHeight = this.childRef.currentHeight;
  }

  ngAfterViewInit() {
    console.log("View Init");
  }

  ngAfterViewChecked() {
    console.log("View Checked");
  }

  alterInput() {
    this.initial += " < ! > ";
  }
}
