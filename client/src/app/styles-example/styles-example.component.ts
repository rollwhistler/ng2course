import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-styles-example",
  templateUrl: "./styles-example.component.html",
  styleUrls: ["./styles-example.component.scss"]
})
export class StylesExampleComponent implements OnInit {
  @Input() borderColor: string;
  customStyles: any;

  constructor() { }

  ngOnInit() {
    this.customStyles = {
      border: "2px solid " + this.borderColor
    };
  }
}
