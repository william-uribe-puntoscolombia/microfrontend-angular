import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { describe, beforeEach, it, expect, vi } from 'vitest';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AppComponent con NgxPermissions', () => {
  let fixture: ComponentFixture<App>;
  let component: App;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        NgxPermissionsModule.forRoot(),
        RouterTestingModule.withRoutes([]),
      ],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the given url and toggle viewRouter', async () => {
    const navigateByUrlSpy = vi.spyOn(router, 'navigateByUrl');
    const setSpy = vi.spyOn(component.viewRouter, 'set');

    component.goToUrl('/test-url');

    expect(navigateByUrlSpy).toHaveBeenCalledWith('/test-url');
    expect(setSpy).toHaveBeenCalledWith(false);
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(setSpy).toHaveBeenCalledWith(true);
  });
});
