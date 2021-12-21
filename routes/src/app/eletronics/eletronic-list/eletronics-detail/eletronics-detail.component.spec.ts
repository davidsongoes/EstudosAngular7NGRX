import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletronicsDetailComponent } from './eletronics-detail.component';

describe('EletronicsDetailComponent', () => {
  let component: EletronicsDetailComponent;
  let fixture: ComponentFixture<EletronicsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletronicsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EletronicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
