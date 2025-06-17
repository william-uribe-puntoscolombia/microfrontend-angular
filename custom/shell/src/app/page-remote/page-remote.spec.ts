import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRemote } from './page-remote';

describe('PageRemote', () => {
  let component: PageRemote;
  let fixture: ComponentFixture<PageRemote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRemote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRemote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
