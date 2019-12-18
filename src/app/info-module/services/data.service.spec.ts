import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { of, defer } from 'rxjs';

describe('DataService', () => {
  // let dataService: DataService;
  // let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ],

    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
     expect(service).toBeTruthy();
  }));

  it('data service should receive mock data ', inject([DataService], (service: DataService) => {
    const httpTestingController = TestBed.get(HttpTestingController);
    service.getData().subscribe(x => expect(x).toBeTruthy('No data is returned'));

    const req = httpTestingController.expectOne('assets/data.json');
    req.flush(of({ highlight_info: [{ def: 'AAA' }] }) );
    // expect(service).toBeTruthy();
  }));
});
