import { Component, OnInit } from '@angular/core';
import { GeneralInfo } from 'src/app/info-module/models';
import { InfoService } from '../../info.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-tool-info-component',
  templateUrl: './tool-info.component.html',
  styleUrls: ['./tool-info.component.css']
})
export class ToolInfoComponent implements OnInit {

  constructor(private service: InfoService) { }

  public InfoList$: Observable<GeneralInfo[]>;

  ngOnInit() {
    this.InfoList$ = this.service.getToolInfo();
  }

}
