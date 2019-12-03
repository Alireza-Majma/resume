import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Observable } from 'rxjs';
import { ExperienceInfo } from 'src/app/info-module/models';

@Component({
  selector: 'app-experience-info-component',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent implements OnInit {

  constructor(private service: InfoService) { }
  infoList$: Observable<ExperienceInfo[]>;

  ngOnInit() {
     this.infoList$ = this.service.getExperienceInfo();
     this.infoList$.subscribe(x => console.log(x));
  }

}
