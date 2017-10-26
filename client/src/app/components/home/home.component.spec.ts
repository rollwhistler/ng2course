import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogginService } from '../../services/loggin.service';
import { HomeComponent } from './home.component';

let logginServiceStub = {
  isLogged: true,
  get: () => { },
  set: () => { }
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: LogginService, useValue: logginServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
