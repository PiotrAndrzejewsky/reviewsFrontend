import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendActivationCodeComponent } from './resend-activation-code.component';

describe('ResendActivationCodeComponent', () => {
  let component: ResendActivationCodeComponent;
  let fixture: ComponentFixture<ResendActivationCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendActivationCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResendActivationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
