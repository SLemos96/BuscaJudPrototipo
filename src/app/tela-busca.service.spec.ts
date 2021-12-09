import { TestBed } from '@angular/core/testing';

import { TelaBuscaService } from './tela-busca.service';

describe('TelaBuscaService', () => {
  let service: TelaBuscaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelaBuscaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
