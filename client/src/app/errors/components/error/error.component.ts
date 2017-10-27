import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public message: string;
  constructor(public es: ErrorService) {
    es.getErrors().subscribe((message) => {
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, 2000);
    });
   }

  ngOnInit() {
  }

}
