import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCompComponent } from './info-comp.component';

describe('InfoCompComponent', () => {
  let component: InfoCompComponent;
  let fixture: ComponentFixture<InfoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
