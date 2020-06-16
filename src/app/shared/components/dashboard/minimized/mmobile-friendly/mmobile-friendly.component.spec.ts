import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmobileFriendlyComponent } from './mmobile-friendly.component';

describe('MmobileFriendlyComponent', () => {
  let component: MmobileFriendlyComponent;
  let fixture: ComponentFixture<MmobileFriendlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmobileFriendlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmobileFriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
