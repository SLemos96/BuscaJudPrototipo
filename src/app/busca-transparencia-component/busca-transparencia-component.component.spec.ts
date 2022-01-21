import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaTransparenciaComponentComponent } from './busca-transparencia-component.component';

describe('BuscaTransparenciaComponentComponent', () => {
  let component: BuscaTransparenciaComponentComponent;
  let fixture: ComponentFixture<BuscaTransparenciaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaTransparenciaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaTransparenciaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
