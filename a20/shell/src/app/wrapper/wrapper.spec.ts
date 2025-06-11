import { describe, beforeEach, it, expect } from 'vitest';
import { Wrapper } from './wrapper';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

describe('Wrapper', () => {
  let component: Wrapper;
  let fixture: ComponentFixture<Wrapper>;
  let mockedActivatedRoute = {
    snapshot: {
      data: {
        config: {
          remoteName: 'test-remote',
          exposedModule: './TestModule',
          elementName: 'test-element-webcomp',
        },
      },
    },
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wrapper],
      providers: [
        provideZonelessChangeDetection(),
        { provide: ActivatedRoute, useValue: mockedActivatedRoute },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wrapper);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
