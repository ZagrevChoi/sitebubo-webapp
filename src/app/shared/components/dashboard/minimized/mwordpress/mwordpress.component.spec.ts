import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwordpressComponent } from './mwordpress.component';

describe('MwordpressComponent', () => {
  let component: MwordpressComponent;
  let fixture: ComponentFixture<MwordpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwordpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
