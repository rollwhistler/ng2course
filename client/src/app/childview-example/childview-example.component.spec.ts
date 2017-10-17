import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildviewExampleComponent } from './childview-example.component';

describe('ChildviewExampleComponent', () => {
  let component: ChildviewExampleComponent;
  let fixture: ComponentFixture<ChildviewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildviewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
