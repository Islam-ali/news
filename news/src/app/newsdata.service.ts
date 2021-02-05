import { Injectable } from '@angular/core';
/*******************2******************* */
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsdataService {

  business():Observable<any>
  {
    return  this._httpClient.get('http://newsapi.org/v2/top-headlines?language=ar&country=eg&category=business&apiKey=abbeb848da774a749cbc393f2136f22a');
  }
  /****************************3-get api*********************************** */
  news():Observable<any>
  {
    return  this._httpClient.get('http://newsapi.org/v2/top-headlines?language=ar&country=eg&category=sports&apiKey=abbeb848da774a749cbc393f2136f22a');
  }
  /************************************************ */
  entertainment():Observable<any>
  {
    return  this._httpClient.get('http://newsapi.org/v2/top-headlines?language=ar&country=eg&category=entertainment&apiKey=abbeb848da774a749cbc393f2136f22a');
  }
  /***************************************************************/
  general():Observable<any>
  {
    return this._httpClient.get('http://newsapi.org/v2/top-headlines?language=ar&country=eg&category=general&apiKey=abbeb848da774a749cbc393f2136f22a')
  }
/********************************************************************** */
health():Observable<any>
{
  return this._httpClient.get('http://newsapi.org/v2/top-headlines?language=ar&country=eg&category=health&apiKey=abbeb848da774a749cbc393f2136f22a')
}
  constructor(public _httpClient:HttpClient) { }
}
