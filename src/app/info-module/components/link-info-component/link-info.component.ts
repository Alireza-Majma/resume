import { Component, OnInit } from '@angular/core';
import { GeneralInfo } from 'src/app/info-module/models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-link-info-component',
  templateUrl: './link-info.component.html',
  styleUrls: ['./link-info.component.css']
})
export class LinkInfoComponent implements OnInit {

  // constructor(private jexiaInfoService: JexiaInfoService, private infoService: InfoService ) { }
  constructor(private infoService: InfoService ) { }

  public InfoList$: Observable<GeneralInfo[]>;

  ngOnInit() {
    this.InfoList$ = this.infoService.linkInfoList$;
  }

}
