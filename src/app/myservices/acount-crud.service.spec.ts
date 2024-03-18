import { TestBed } from '@angular/core/testing';

import { AcountCRUDService } from './acount-crud.service';

describe('AcountCRUDService', () => {
  let service: AcountCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcountCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
