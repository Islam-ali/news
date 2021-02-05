import { Component, OnInit } from '@angular/core';
import {NewsdataService} from '../newsdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search:string="";
  generaldata:object[]=[];

  constructor(private _NewsdataService:NewsdataService)

  {
    this._NewsdataService.general().subscribe(data => this.generaldata = data.articles )
  }

  ngOnInit(): void {
  }

}
