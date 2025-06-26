import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Person } from '../../core/interface/reactive-form';
import { ReactiveForm } from './reactive-form';

describe('ReactiveForm', () => {
  let component: ReactiveForm;
  let fixture: ComponentFixture<ReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveForm],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to form value changes and call validateForm on value change', () => {
    const validateFormSpy = vi.spyOn(component, 'validateForm');
    component.ngOnInit();
    component.myForm.patchValue({ name: 'John' });
    expect(validateFormSpy).toHaveBeenCalledWith(expect.objectContaining({ name: 'John' }));
  });

  it('should assign _myFormSubscription after ngOnInit', () => {
    component.ngOnInit();
    expect(component._myFormSubscription).toBeTruthy();
    expect(typeof component._myFormSubscription.unsubscribe).toBe('function');
  });

  it('should return undefined if field is not dirty', () => {
    component.formError.set([{ path: 'name', message: 'Name is required' }]);
    component.myForm.get('name')?.markAsDirty();
    expect(component.checkFieldError('name')).toEqual('Name is required');
  });

  it('should return undefined if there is no error for the field', () => {
    component.formError.set([]);
    component.myForm.get('name')?.markAsDirty();
    expect(component.checkFieldError('name')).toBeUndefined();
  });

  it('should return true and clear errors if form is valid', () => {
    const validFormValues: Person = { name: 'John', lastname: 'Doe', email: 'john@example.com' };
    component.formError.set([{ path: 'name', message: 'error' }]);
    const result = component.validateForm(validFormValues);
    expect(result).toBe(true);
    expect(component.formError()).toEqual([]);
  });

  it('should return false and set errors if form is invalid', () => {
    const invalidFormValues: Person = { name: '', lastname: '', email: 'not-an-email' };
    const result = component.validateForm(invalidFormValues);
    expect(result).toBe(false);
    expect(component.formError().length).toBeGreaterThan(0);
  });
});
