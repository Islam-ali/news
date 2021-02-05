import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import {FormsModule} from '@angular/forms';
/*******************1************************ */
import {HttpClientModule} from '@angular/common/http';
/****************************************************** */
import { BusinessComponent } from './business/business.component';
import { HomeComponent } from './home/home.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { FiltterPipe } from './filtter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    BusinessComponent,
    HomeComponent,
    EntertainmentComponent,
    HealthComponent,
    FiltterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
