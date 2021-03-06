import { Component, OnInit } from '@angular/core';
import { GeneralInfo } from 'src/app/info-module/models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-technical-info-component',
  templateUrl: './technical-info.component.html',
  styleUrls: ['./technical-info.component.css']
})
export class TechnicalInfoComponent implements OnInit {

  // constructor(private jexiaInfoService: JexiaInfoService, private infoService: InfoService ) { }
  constructor(private infoService: InfoService ) { }

  public InfoList$: Observable<GeneralInfo[]>;

  ngOnInit() {
    this.InfoList$ = this.infoService.technicalInfoList$;

  }

}
