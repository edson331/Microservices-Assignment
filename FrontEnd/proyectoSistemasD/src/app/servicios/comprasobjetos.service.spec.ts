import { TestBed } from '@angular/core/testing';

import { ComprasobjetosService } from './comprasobjetos.service';

describe('ComprasobjetosService', () => {
  let service: ComprasobjetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasobjetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
