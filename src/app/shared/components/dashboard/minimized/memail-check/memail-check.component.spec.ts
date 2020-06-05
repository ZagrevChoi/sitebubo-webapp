import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemailCheckComponent } from './memail-check.component';

describe('MemailCheckComponent', () => {
  let component: MemailCheckComponent;
  let fixture: ComponentFixture<MemailCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemailCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemailCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
