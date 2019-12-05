import { Component, OnInit } from '@angular/core';
import { GeneralInfo } from 'src/app/info-module/models';
import { InfoService } from '../../info.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-link-info-component',
  templateUrl: './link-info.component.html',
  styleUrls: ['./link-info.component.css']
})
export class LinkInfoComponent implements OnInit {

  constructor(private service: InfoService) { }

  public InfoList$: Observable<GeneralInfo[]>;

  ngOnInit() {
    this.InfoList$ = this.service.getLinkInfo();
  }

}
