import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaProcessoComponentComponent } from './busca-processo-component.component';

describe('BuscaProcessoComponentComponent', () => {
  let component: BuscaProcessoComponentComponent;
  let fixture: ComponentFixture<BuscaProcessoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaProcessoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaProcessoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
