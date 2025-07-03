import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@core/services/user-service';
import { NgxPermissionsAllowStubDirective, NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { of, throwError } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { getTranslocoModule } from '../../transloco-testing.module';
import { UsersList } from './users-list';

describe('UsersList', () => {
  let component: UsersList;
  let fixture: ComponentFixture<UsersList>;
  let userServiceMock: Partial<UserService>;

  beforeEach(async () => {
    userServiceMock = {
      getUser: vi.fn().mockReturnValue(of()),
    };
    await TestBed.configureTestingModule({
      imports: [UsersList, NgxPermissionsModule.forRoot({}), NgxPermissionsAllowStubDirective, getTranslocoModule()],
      providers: [provideHttpClient(withInterceptorsFromDi()), { provide: UserService, useValue: userServiceMock }],
    }).compileComponents();

    TestBed.inject(NgxPermissionsService).loadPermissions(['user:list']);

    fixture = TestBed.createComponent(UsersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.usersList.set([]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test unit function service success', () => {
    (userServiceMock.getUser as Mock).mockReturnValue(of({ id: 'abc-123', firstName: 'John', lastName: 'Naranjo' }));
    component.ngOnInit();
    expect(userServiceMock.getUser).toHaveBeenCalled();
    expect(component.usersList()).toEqual([{ id: 'abc-123', firstName: 'John', lastName: 'Naranjo' }]);
  });

  it('test unit function service error', () => {
    (userServiceMock.getUser as Mock).mockReturnValue(throwError(() => new Error('Error fetching user data')));
    component.ngOnInit();
    expect(userServiceMock.getUser).toHaveBeenCalled();
    expect(component.usersList()).toEqual([]);
  });
});
