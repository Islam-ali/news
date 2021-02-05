import { Component, OnInit } from '@angular/core';
import {NewsdataService} from '../newsdata.service'
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  search:string="";
  entertainment:object[]=[];
  constructor(private _NewsdataService:NewsdataService)
  {
    this._NewsdataService.entertainment().subscribe(data => this.entertainment=data.articles)
  }

  ngOnInit(): void {
  }

}
