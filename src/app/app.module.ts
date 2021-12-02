import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { InformationComponent } from './information/information.component';
import { AttractionsComponent } from './attractions/attractions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    InformationComponent,
    AttractionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
