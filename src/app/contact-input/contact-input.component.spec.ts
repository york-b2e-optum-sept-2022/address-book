import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInputComponent } from './contact-input.component';

describe('ContactInputComponent', () => {
  let component: ContactInputComponent;
  let fixture: ComponentFixture<ContactInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
