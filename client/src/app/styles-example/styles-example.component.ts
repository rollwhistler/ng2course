import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-styles-example",
  templateUrl: "./styles-example.component.html",
  styleUrls: ["./styles-example.component.scss"]
})
export class StylesExampleComponent implements OnInit {
  @Input() borderColor: string;
  @Input() replicate: number;
  arrNumCopies: number[];

  customStyles: any;

  constructor() { }

  ngOnInit() {
    this.customStyles = {
      border: "2px solid " + this.borderColor
    };
    this.arrNumCopies = Array(this.replicate);
    for (let i = 0; i < this.arrNumCopies.length; i++) {
      this.arrNumCopies[i] = i;
    }
  }
}
