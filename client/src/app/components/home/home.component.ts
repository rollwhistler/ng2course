import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../errors/services/error.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public es: ErrorService) { }

  ngOnInit() {
  }

  fakeError() {
    this.es.notify("Generated Fake Error, RUuuuunnn!!");
  }

}
