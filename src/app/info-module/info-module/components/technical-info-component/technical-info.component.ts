import { Component, OnInit } from '@angular/core';
import { TechnicalInfo } from 'src/app/info-module/models';
import { InfoService } from '../../info.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-technical-info-component',
  templateUrl: './technical-info.component.html',
  styleUrls: ['./technical-info.component.css']
})
export class TechnicalInfoComponent implements OnInit {

  constructor(private service: InfoService) { }

  public InfoList$: Observable<TechnicalInfo[]>;

  ngOnInit() {
    this.service.getTechnicalInfo();

    this.InfoList$ = this.service.getTechnicalInfo().pipe(tap(x => console.log(x)));

  }

}
