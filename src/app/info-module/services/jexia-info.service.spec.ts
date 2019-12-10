/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JexiaInfoService } from './jexia-info.service';

describe('Service: Info', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JexiaInfoService]
    });
  });

  it('should ...', inject([JexiaInfoService], (service: JexiaInfoService) => {
    expect(service).toBeTruthy();
  }));
});
