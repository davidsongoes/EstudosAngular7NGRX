import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObsevablesIntroComponent } from './hot-obsevables-intro.component';

describe('HotObsevablesIntroComponent', () => {
  let component: HotObsevablesIntroComponent;
  let fixture: ComponentFixture<HotObsevablesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotObsevablesIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotObsevablesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
