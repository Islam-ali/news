import { Component, OnInit } from '@angular/core';
/********************4***************** */
import {NewsdataService} from '../newsdata.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  search:string="";
  newsdata:object[]=[];

  constructor(private _NewsdataService:NewsdataService ) { 

      this._NewsdataService.news().subscribe( data => this.newsdata=data.articles)
  }


  ngOnInit(): void {
  }

}
