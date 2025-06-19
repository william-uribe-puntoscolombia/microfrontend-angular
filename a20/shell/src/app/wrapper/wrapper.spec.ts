import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';

import { Wrapper } from './wrapper';

describe('Wrapper', () => {
  let component: Wrapper;
  let fixture: ComponentFixture<Wrapper>;
  const mockedActivatedRoute = {
    snapshot: {
      data: {
        config: {
          remoteName: 'test-remote',
          exposedModule: './TestModule',
          elementName: 'test-element-webcomp',
        },
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wrapper],
      providers: [provideZonelessChangeDetection(), { provide: ActivatedRoute, useValue: mockedActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(Wrapper);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
