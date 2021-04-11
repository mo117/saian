import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJoinUSComponent } from './header-join-us.component';

describe('HeaderJoinUSComponent', () => {
  let component: HeaderJoinUSComponent;
  let fixture: ComponentFixture<HeaderJoinUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderJoinUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderJoinUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
