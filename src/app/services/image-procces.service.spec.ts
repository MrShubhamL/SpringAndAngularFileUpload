import { TestBed } from '@angular/core/testing';

import { ImageProccesService } from './image-procces.service';

describe('ImageProccesService', () => {
  let service: ImageProccesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageProccesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
