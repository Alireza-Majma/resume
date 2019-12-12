/*
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JexiaAccess } from './jexia-access';
import { GeneralInfo, EducationInfo, HighlightInfo, ExperienceInfo } from '../models';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class JexiaInfoService {


  // toolInfoSubject: BehaviorSubject<GeneralInfo[]>;
  infoSubject: {[key: string]: BehaviorSubject<any[]>;};

  constructor(
    private http: HttpClient
  ) {
    // this.toolInfoSubject = new BehaviorSubject<GeneralInfo[]>([]);
    this.infoSubject = {};
  }

  getInfoList$(dsName: string): Observable<any[]> {
    this.infoSubject[dsName] = this.infoSubject[dsName] || new BehaviorSubject<any[]>([]);
    if (!this.infoSubject[dsName].getValue().length) {
      this.getData(dsName, (x) => this.infoSubject[dsName].next(x));
    }
    return this.infoSubject[dsName].asObservable();
  }

  get toolInfoList$(): Observable<GeneralInfo[]> {
    return this.getInfoList$('tool_info') as Observable<GeneralInfo[]>;
  }

  get linkInfoList$(): Observable<GeneralInfo[]> {
    return this.getInfoList$('link_info') as Observable<GeneralInfo[]>;
  }

  get certificatetInfoList$(): Observable<EducationInfo[]> {
    return this.getInfoList$('certificate_info') as Observable<EducationInfo[]>;
  }
  get educationInfoList$(): Observable<EducationInfo[]> {
    return this.getInfoList$('education_info') as Observable<EducationInfo[]>;
  }

  get highlightInfoList$(): Observable<HighlightInfo[]> {
    return this.getInfoList$('highlight_info') as Observable<HighlightInfo[]>;
  }

  get technicalInfoList$(): Observable<GeneralInfo[]> {
    return this.getInfoList$('technical_info') as Observable<GeneralInfo[]>;
  }

  get blogInfoList$(): Observable<GeneralInfo[]> {
    return this.getInfoList$('blog_info') as Observable<GeneralInfo[]>;
  }

  get experienceInfoList$(): Observable<ExperienceInfo[]> {
    return this.getInfoList$('experience_info') as Observable<ExperienceInfo[]>;
  }

  getData(dsName: string, callBack: (x: any[]) => void) {
    JexiaAccess.Init().then(() => {
      this.http.get<GeneralInfo[]>(JexiaAccess.dataSetPath(dsName), JexiaAccess.Header)
        .subscribe(x => {
          callBack(x);
          // this.toolInfoSubject.next(x);
          JexiaAccess.Terminate();
        });
    });
  }
}
*/
