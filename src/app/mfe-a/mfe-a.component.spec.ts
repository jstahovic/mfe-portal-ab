import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeAComponent } from './mfe-a.component';

describe('MfeAComponent', () => {
  let component: MfeAComponent;
  let fixture: ComponentFixture<MfeAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfeAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
