import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { z } from 'zod';

import { FormErrors } from '../../core/interface/reactive-form';
import { personSchema } from '../../core/schemas/person.schemas';

@Component({
  selector: 'mf-users-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
  standalone: true,
})
export class ReactiveForm implements OnDestroy, OnInit {
  formBuilder = inject(FormBuilder);
  formError = signal<FormErrors[]>([]);
  _myFormSubscription!: Subscription;

  myForm: FormGroup = this.formBuilder.group({
    name: [''],
    lastname: [''],
    email: [''],
  });

  ngOnDestroy(): void {
    if (this._myFormSubscription) this._myFormSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.validateForm(this.myForm.value);

    this._myFormSubscription = this.myForm.valueChanges.subscribe((formValues) => {
      this.validateForm(formValues);
    });
  }

  checkFieldError(fieldName: string) {
    const error = this.formError().filter((error) => error.path === String(fieldName));
    if (this.myForm.get(fieldName)?.dirty && error.length) {
      return error[0].message;
    }
    return undefined;
  }

  validateForm(formValues: unknown): boolean {
    this.formError.set([]);
    try {
      personSchema.parse(formValues);
    } catch (err) {
      if (err instanceof z.ZodError) {
        err.errors.forEach((error) => {
          const errorExist = this.formError().find((value) => value.path === String(error.path[0]));
          if (!errorExist) {
            this.formError.update((value) => [...value, { path: String(error.path[0]), message: error.message }]);
          }
        });
      }
      return false;
    }
    this.formError.set([]);
    return true;
  }
}
