import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneralInfo } from 'src/app/info-module/models';
import { InfoService } from '../../info.service';
import { Observable, from } from 'rxjs';
// import { JexiaInfoService } from '../../services/jexia-info.service';

@Component({
  selector: 'app-tool-info-component',
  templateUrl: './tool-info.component.html',
  styleUrls: ['./tool-info.component.css']
})
export class ToolInfoComponent implements OnInit, OnDestroy {

  // constructor(private jexiaInfoService: JexiaInfoService, private infoService: InfoService ) { }
  constructor(private infoService: InfoService ) { }

  public InfoList$: Observable<GeneralInfo[]>;

  ngOnInit() {
    this.InfoList$ = this.infoService.toolInfoList$;
  }

  ngOnDestroy(): void {
    // this.jexiaInfoService.destroyInfo();
  }


}
