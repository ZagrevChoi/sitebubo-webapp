import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvisitorsComponent } from './mvisitors.component';

describe('MvisitorsComponent', () => {
  let component: MvisitorsComponent;
  let fixture: ComponentFixture<MvisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
