import { TestBed } from '@angular/core/testing';

import { UpcomingGamesService } from './upcoming-games.service';

describe('UpcomingGamesService', () => {
  let service: UpcomingGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
