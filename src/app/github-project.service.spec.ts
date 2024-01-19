import { TestBed } from '@angular/core/testing';

import { GithubProjectService } from './github-project.service';

describe('GithubProjectService', () => {
  let service: GithubProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
