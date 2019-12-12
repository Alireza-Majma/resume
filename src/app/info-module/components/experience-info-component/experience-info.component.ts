import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Observable } from 'rxjs';
import { ExperienceInfo } from 'src/app/info-module/models';
// import { JexiaInfoService } from '../../services/jexia-info.service';

@Component({
  selector: 'app-experience-info-component',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent implements OnInit {

  // constructor(private jexiaInfoService: JexiaInfoService, private infoService: InfoService ) { }
  constructor(private infoService: InfoService ) { }
  infoList$: Observable<ExperienceInfo[]>;

  ngOnInit() {
     this.infoList$ = this.infoService.experienceInfoList$;
  }

}
