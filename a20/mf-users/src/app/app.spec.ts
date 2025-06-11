import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { describe, beforeEach, it, expect, vi } from 'vitest';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent con NgxPermissions', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

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
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
