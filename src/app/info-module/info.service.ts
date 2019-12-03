import { Injectable } from '@angular/core';
import { GeneralInfo, ExperienceInfo, HighlightInfo, EducationInfo } from './models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

constructor(private http: HttpClient ) {}

public getTechnicalInfo(): Observable<GeneralInfo[]> {
    const rslt =  this.http.get('assets/technical-info.json');
    return rslt as any;
}

public getExperienceInfo(): Observable<ExperienceInfo[]> {
  const rslt =  this.http.get('assets/experience-info.json');
  return rslt as any;
}

public getHighlightInfo(): Observable<HighlightInfo[]> {
  const rslt =  this.http.get('assets/highlight-info.json');
  return rslt as any;
}

public getEducationInfo(): Observable<EducationInfo[]> {
  const rslt =  this.http.get('assets/education-info.json');
  return rslt as any;
}
public getCertificateInfo(): Observable<EducationInfo[]> {
  const rslt =  this.http.get('assets/certificate-info.json');
  return rslt as any;
}
public getToolInfo(): Observable<GeneralInfo[]> {
  const rslt =  this.http.get('assets/tool-info.json');
  return rslt as any;
}
public getBlogInfo(): Observable<GeneralInfo[]> {
  const rslt =  this.http.get('assets/blog-info.json');
  return rslt as any;
}
}

