import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPermissionsAllowStubDirective, NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { beforeEach, describe, expect, it } from 'vitest';

import { UsersList } from './users-list';

describe('UsersList', () => {
  let component: UsersList;
  let fixture: ComponentFixture<UsersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersList, NgxPermissionsModule.forRoot({}), NgxPermissionsAllowStubDirective],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    TestBed.inject(NgxPermissionsService).loadPermissions(['user:list']);

    fixture = TestBed.createComponent(UsersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const compiled = fixture.nativeElement as HTMLElement;
    console.log('HTML content:', compiled.outerHTML);

    // const content = fixture.debugElement.nativeElement.querySelector('.container');
    // console.log('->', content.textContent);

    // const content = fixture.debugElement
    // console.log('->', content.nativeElement.textContent);
  });
});
