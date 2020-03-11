import { TestBed } from '@angular/core/testing';

import { IncomeExpenditureService } from './income-expenditure.service';

describe('IncomeExpenditureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomeExpenditureService = TestBed.get(IncomeExpenditureService);
    expect(service).toBeTruthy();
  });
});
