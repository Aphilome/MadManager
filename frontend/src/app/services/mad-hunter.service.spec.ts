import { TestBed } from '@angular/core/testing';

import { MadHunterService } from './mad-hunter.service';

describe('MadHunterService', () => {
  let service: MadHunterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadHunterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
