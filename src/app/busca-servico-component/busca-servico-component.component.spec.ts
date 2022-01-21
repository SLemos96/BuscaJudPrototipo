import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaServicoComponentComponent } from './busca-servico-component.component';

describe('BuscaServicoComponentComponent', () => {
  let component: BuscaServicoComponentComponent;
  let fixture: ComponentFixture<BuscaServicoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaServicoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaServicoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
