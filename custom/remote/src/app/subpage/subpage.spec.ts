import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage } from './subpage';

describe('Subpage', () => {
  let component: Subpage;
  let fixture: ComponentFixture<Subpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
