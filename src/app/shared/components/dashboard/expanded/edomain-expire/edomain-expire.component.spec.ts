import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdomainExpireComponent } from './edomain-expire.component';

describe('EdomainExpireComponent', () => {
  let component: EdomainExpireComponent;
  let fixture: ComponentFixture<EdomainExpireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdomainExpireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdomainExpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
