import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { HighlightInfo } from 'src/app/info-module/models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-career-highlight-component',
  templateUrl: './career-highlight.component.html',
  styleUrls: ['./career-highlight.component.css']
})
export class CareerHighlightComponent implements OnInit {

  constructor(private service: InfoService) { }

  InfoList$: Observable<HighlightInfo[]>;

  ngOnInit() {
    console.log('oninit');
    this.InfoList$ = this.service.getHighlightInfo();
   }

}
