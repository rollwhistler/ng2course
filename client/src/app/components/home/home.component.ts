import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../../modules/shared/services/logged.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wolves = 2;
  constructor(public ls: LoggedService) { }

  ngOnInit() {
  }

}
