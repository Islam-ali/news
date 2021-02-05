import { Component, OnInit } from '@angular/core';
import {NewsdataService} from '../newsdata.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  search:string="";
  healthdata:object[]=[];

  constructor(private _NewsdataService:NewsdataService) 
  {
    this._NewsdataService.health().subscribe(data => this.healthdata=data.articles)
  }

  ngOnInit(): void {
  }

}
