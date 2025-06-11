import { describe, beforeEach, it, expect } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Wrapper } from './wrapper';
import { ActivatedRoute } from '@angular/router';


describe('Wrapper', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wrapper],
      providers: [
        provideZonelessChangeDetection(),
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create the Wrapper', () => {

    const fixture = TestBed.createComponent(Wrapper);

    const wrapper = fixture.componentInstance;

    expect(wrapper).toBeTruthy();

  });


});
