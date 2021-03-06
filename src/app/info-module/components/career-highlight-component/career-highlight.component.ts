import { Component, OnInit } from '@angular/core';
import { HighlightInfo } from 'src/app/info-module/models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InfoService } from '../../services/info.service';


@Component({
  selector: 'app-career-highlight-component',
  templateUrl: './career-highlight.component.html',
  styleUrls: ['./career-highlight.component.css']
})
export class CareerHighlightComponent implements OnInit {

  // constructor(private jexiaInfoService: JexiaInfoService, private infoService: InfoService ) { }
  constructor(private infoService: InfoService ) { }

  InfoList$: Observable<HighlightInfo[]>;

  ngOnInit() {
    this.InfoList$ = this.infoService.highlightInfoList$;
   }

}
