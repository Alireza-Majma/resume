import { Injectable, OnInit } from '@angular/core';
import { GeneralInfo, ExperienceInfo, HighlightInfo, EducationInfo } from './../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    const rslt = this.http.get('assets/data.json');
    return rslt;
  }

}


