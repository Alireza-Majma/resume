import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EducationInfo } from 'src/app/info-module/models';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-general-info-component',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.css']
})
export class EducationInfoComponent implements OnInit {

  // constructor(private jexiaInfoService: JexiaInfoService, private infoService: InfoService ) { }
  constructor(private infoService: InfoService ) { }
  EducationList$: Observable<EducationInfo[]>;
  CertificateList$: Observable<EducationInfo[]>;

  ngOnInit() {
    this.EducationList$ = this.infoService.educationInfoList$;
    this.CertificateList$ = this.infoService.certificatetInfoList$;
   }

}
