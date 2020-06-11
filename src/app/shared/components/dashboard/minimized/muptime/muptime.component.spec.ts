import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuptimeComponent } from './muptime.component';

describe('MuptimeComponent', () => {
  let component: MuptimeComponent;
  let fixture: ComponentFixture<MuptimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuptimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
