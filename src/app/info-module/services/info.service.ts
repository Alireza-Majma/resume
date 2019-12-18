import { Injectable, OnInit } from '@angular/core';
import { GeneralInfo, ExperienceInfo, HighlightInfo, EducationInfo } from './../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class InfoService {

  static data$: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    InfoService.data$ = new BehaviorSubject<any>({});
    this.getData().subscribe(x => InfoService.data$.next(x));
  }

  public getData(): Observable<GeneralInfo[]> {
    const rslt = this.http.get('assets/data.json');
    return rslt as any;
  }

  getInfo(name: string): Observable<any>  {
    return InfoService.data$.asObservable().pipe(map(x => x[name]));
  }

  get technicalInfoList$(): Observable<GeneralInfo[]> {
    return this.getInfo('technical_info');
  }

  get experienceInfoList$(): Observable<ExperienceInfo[]> {
    return this.getInfo('experience_info');
  }

  get highlightInfoList$(): Observable<HighlightInfo[]> {
    return this.getInfo('highlight_info');
  }
  get educationInfoList$(): Observable<EducationInfo[]> {
    return this.getInfo('education_info');
  }
  get certificatetInfoList$(): Observable<EducationInfo[]> {
    return this.getInfo('certificate_info');
  }
  get toolInfoList$(): Observable<GeneralInfo[]> {
    return this.getInfo('tool_info');
  }
  get blogInfoList$(): Observable<GeneralInfo[]> {
    return this.getInfo('blog_info');
  }
  get linkInfoList$(): Observable<GeneralInfo[]> {
    return this.getInfo('link_info');
  }
}


