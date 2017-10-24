import { Component, OnInit } from '@angular/core';
import { LogginService } from '../../services/loggin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public bitches: number = 2;
  public gender: string = 'm';
  public users: any[] = new Array(4);
  constructor(public ls: LogginService) { }

  ngOnInit() {
  }

  setLogged(b: boolean) {
    this.ls.set(b);
  }
}
