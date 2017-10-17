import { Component, ViewChild } from '@angular/core';
import {ChildviewExampleComponent} from './childview-example/childview-example.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numCopies = 3;
  currentHeight = 0;
  @ViewChild(ChildviewExampleComponent) childRef: ChildviewExampleComponent;

  newHeight() {
    this.currentHeight = this.childRef.currentHeight;
  }
}
