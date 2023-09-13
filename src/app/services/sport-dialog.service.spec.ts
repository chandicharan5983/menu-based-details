import { TestBed } from '@angular/core/testing';

import { SportDialogService } from './sport-dialog.service';

describe('SportDialogService', () => {
  let service: SportDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
