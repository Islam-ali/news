import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NewsdataService} from '../newsdata.service'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  search:string="";
  businessdata:object[]=[];

  constructor(private _NewsdataService:NewsdataService ) { 

      this._NewsdataService.business().subscribe( data => this.businessdata=data.articles)
  }


  ngOnInit(): void {
  }

}
