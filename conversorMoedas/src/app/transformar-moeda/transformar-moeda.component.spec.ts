import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformarMoedaComponent } from './transformar-moeda.component';

describe('TransformarMoedaComponent', () => {
  let component: TransformarMoedaComponent;
  let fixture: ComponentFixture<TransformarMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformarMoedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformarMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
