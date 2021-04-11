import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJoinUSComponent } from './page-join-us.component';

describe('PageJoinUSComponent', () => {
  let component: PageJoinUSComponent;
  let fixture: ComponentFixture<PageJoinUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJoinUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJoinUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
