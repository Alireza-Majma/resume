import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JexiaAccess } from './jexia-access';
import { GeneralInfo } from '../models';
import { JexiaResolver } from './jexia-resolver';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class JexiaInfoService {


  toolInfoSubject: BehaviorSubject<GeneralInfo[]>;

  constructor(
    private http: HttpClient
  ) {
    this.toolInfoSubject = new BehaviorSubject<GeneralInfo[]>([]);
  }

  get infoList$(): Observable<GeneralInfo[]> {
    // console.log(this.toolInfoSubject.getValue());
    if (!this.toolInfoSubject.getValue().length) {
      this.getData();
    }
    return this.toolInfoSubject.asObservable();
  }

  async getData() {
    try {
      await JexiaAccess.Init();
      await this.http.get<GeneralInfo[]>(JexiaAccess.dataSetPath('tool_info'), JexiaAccess.Header)
      .subscribe(x => this.toolInfoSubject.next(x));
    } catch (error) {
      console.log(error);
    }

    JexiaAccess.Terminate();
  }
}
