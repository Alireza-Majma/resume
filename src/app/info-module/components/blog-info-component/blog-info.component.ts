import { Component, OnInit } from '@angular/core';
import { GeneralInfo } from 'src/app/info-module/models';
import { InfoService } from '../../info.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-blog-info-component',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.css']
})
export class BlogInfoComponent implements OnInit {

  constructor(private service: InfoService) { }

  public InfoList$: Observable<GeneralInfo[]>;

  ngOnInit() {
    this.InfoList$ = this.service.getBlogInfo();
  }

}
