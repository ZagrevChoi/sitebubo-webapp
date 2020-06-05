import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdomainExpireComponent } from './mdomain-expire.component';

describe('MdomainExpireComponent', () => {
  let component: MdomainExpireComponent;
  let fixture: ComponentFixture<MdomainExpireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdomainExpireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdomainExpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
