import { describe, beforeEach, it, expect } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Home } from './home';


describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the Home', () => {
    const fixture = TestBed.createComponent(Home);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Bienvenido al home');
  });
});
