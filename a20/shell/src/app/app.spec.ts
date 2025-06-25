import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { App } from './app';
import { getTranslocoModule } from './transloco-testing.module';

describe('AppComponent con NgxPermissions', () => {
  let fixture: ComponentFixture<App>;
  let component: App;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, NgxPermissionsModule.forRoot(), RouterModule.forRoot([]), getTranslocoModule()],
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
    const mockEvent = { preventDefault: vi.fn() } as unknown as MouseEvent;

    component.goToUrl(mockEvent, '/test-url');

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(navigateByUrlSpy).toHaveBeenCalledWith('/test-url');
    expect(setSpy).toHaveBeenCalledWith(false);
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(setSpy).toHaveBeenCalledWith(true);
  });
});
