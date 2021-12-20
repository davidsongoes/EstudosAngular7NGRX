import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdEditComponent } from './dvd-edit.component';

describe('DvdEditComponent', () => {
  let component: DvdEditComponent;
  let fixture: ComponentFixture<DvdEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvdEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
