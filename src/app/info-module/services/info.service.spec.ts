/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoService } from './info.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { InfoModuleTest } from '../info.module.test';
import { of } from 'rxjs';
import * as data from './../../../assets/data.json';



describe('Service: Info', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InfoModuleTest]
    });
  });


  it('should inject InfoService', inject([InfoService], (service: InfoService) => {
     expect(service).toBeTruthy();
  }));

  it('should inject InfoService using TestBed', () => {
    const service = TestBed.get(InfoService);
    expect(service).toBeTruthy();
  });

  it('should inject InfoService', inject([InfoService], (service: InfoService) => {
    service.highlightInfoList$.subscribe(info => {
      console.log(info);
      expect(info).toBeTruthy();
    });
  }));


});
