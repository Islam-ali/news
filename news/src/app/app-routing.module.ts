import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessComponent} from '../app/business/business.component';
import {NewsComponent} from '../app/news/news.component';
import {HomeComponent} from '../app/home/home.component';
import {EntertainmentComponent} from '../app/entertainment/entertainment.component';
import {HealthComponent} from '../app/health/health.component'



const routes: Routes = 
[
  {path:'' , redirectTo :'Home' , pathMatch:'full'},
  {path:'Home' ,component: HomeComponent},
  {path:'BUSINESS' ,component: BusinessComponent},
  {path:'SPORTS' ,component: NewsComponent},
  {path:'entertainment' ,component: EntertainmentComponent},
  {path:'HEALTH' ,component: HealthComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
