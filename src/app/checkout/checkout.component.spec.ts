import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutComponent } from './checkout.component';
import { DebugElement} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      imports: [ReactiveFormsModule, FormsModule, MatDialogModule, MatButtonModule]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('address field validity', () => {
    let errors = {};
    const address = component.userForm.controls['address'];
    expect(address.valid).toBeFalsy();
    // Check for required errors:
    errors = address.errors || {};
    expect(errors['required']).toBeTruthy();
    // Check length:
    address.setValue('greaterthan20characters1234567');
    expect(address.valid).toBeFalsy();
    address.setValue('lessthan20');
    expect(address.valid).toBeTruthy();
  });

  it('city/state/country field validity', () => {
    let errors = {};
    const city = component.userForm.controls['city_state_country'];
    expect(city.valid).toBeFalsy();
    // Check for required errors:
    errors = city.errors || {};
    expect(errors['required']).toBeTruthy();
    // Check length:
    city.setValue('less10');
    expect(city.valid).toBeFalsy();
    city.setValue('greaterthan10');
    expect(city.valid).toBeTruthy();
  });

  it('zip validity', () => {
    let errors = {};
    const zip = component.userForm.controls['zip'];
    expect(zip.valid).toBeFalsy();
    // Check for required errors:
    errors = zip.errors || {};
    expect(errors['required']).toBeTruthy();
    // Check length:
    zip.setValue('1234');
    expect(zip.valid).toBeFalsy();
    zip.setValue('123456');
    expect(zip.valid).toBeFalsy();
    zip.setValue('abcde');
    expect(zip.valid).toBeFalsy();
    zip.setValue('12345');
    expect(zip.valid).toBeTruthy();
  });

  it('phone validity', () => {
    let errors = {};
    const phone = component.userForm.controls['phone_num'];
    expect(phone.valid).toBeFalsy();
    // Check for required errors:
    errors = phone.errors || {};
    expect(errors['required']).toBeTruthy();
    // Check length:
    phone.setValue('1234567891234');
    expect(phone.valid).toBeFalsy();
    phone.setValue('abcde');
    expect(phone.valid).toBeFalsy();
    phone.setValue('12345');
    expect(phone.valid).toBeTruthy();
  });

  it('credit card field validity', () => {
    let errors = {};
    const card = component.userForm.controls['card'];
    expect(card.valid).toBeFalsy();
    // Check for required errors:
    errors = card.errors || {};
    expect(errors['required']).toBeTruthy();
    // Check length:
    card.setValue('123456789123456789123');
    expect(card.valid).toBeFalsy();
    card.setValue('onlytext');
    expect(card.valid).toBeFalsy();
    card.setValue('someText123');
    expect(card.valid).toBeFalsy();
    card.setValue('12345');
    expect(card.valid).toBeTruthy();
  });

  it('expiry field validity', () => {
    let errors = {};
    const exp = component.userForm.controls['card'];
    expect(exp.valid).toBeFalsy();
    // Check for required errors:
    errors = exp.errors || {};
    expect(errors['required']).toBeTruthy();
    // Check length:
    exp.setValue('AA/BB');
    expect(exp.valid).toBeFalsy();
    exp.setValue('03 / 19');
    expect(exp.valid).toBeFalsy();
    exp.setValue('03119');
    expect(exp.valid).toBeTruthy();
  });
});
