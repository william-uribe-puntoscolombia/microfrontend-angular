import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPermissionsAllowStubDirective, NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

import { getTranslocoModule } from '../../transloco-testing.module';
import { UsersList } from './users-list';

describe('UsersList', () => {
  let component: UsersList;
  let fixture: ComponentFixture<UsersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersList, NgxPermissionsModule.forRoot({}), NgxPermissionsAllowStubDirective, getTranslocoModule()],
    }).compileComponents();

    TestBed.inject(NgxPermissionsService).loadPermissions(['user:list']);

    fixture = TestBed.createComponent(UsersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
