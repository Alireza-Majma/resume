import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Observable } from 'rxjs';
import { EducationInfo } from 'src/app/info-module/models';

@Component({
  selector: 'app-general-info-component',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.css']
})
export class EducationInfoComponent implements OnInit {

  constructor(public service: InfoService) { }
  EducationList$: Observable<EducationInfo[]>;
  CertificateList$: Observable<EducationInfo[]>;

  ngOnInit() {
    this.EducationList$ = this.service.getEducationInfo();
    this.CertificateList$ = this.service.getCertificateInfo();
   }

}
