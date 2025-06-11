import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { describe, beforeEach, it, expect} from 'vitest';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterModule } from '@angular/router';

describe('AppComponent con NgxPermissions', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        NgxPermissionsModule.forRoot(),
        RouterModule.forRoot([])
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
