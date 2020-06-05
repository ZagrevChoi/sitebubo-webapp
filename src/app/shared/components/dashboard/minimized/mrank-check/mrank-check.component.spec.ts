import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrankCheckComponent } from './mrank-check.component';

describe('MrankCheckComponent', () => {
  let component: MrankCheckComponent;
  let fixture: ComponentFixture<MrankCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrankCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrankCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
