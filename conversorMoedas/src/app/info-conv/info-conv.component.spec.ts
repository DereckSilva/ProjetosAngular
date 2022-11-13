import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConvComponent } from './info-conv.component';

describe('InfoConvComponent', () => {
  let component: InfoConvComponent;
  let fixture: ComponentFixture<InfoConvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoConvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
