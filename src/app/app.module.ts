import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ObservableComponent } from './observable/observable.component';
import {HttpClientModule} from '@angular/common/http';
import { FromEventComponent } from './from-event/from-event.component';
import { DataUtilityService } from './services/data-utility.service';
import { IntervalOperatorComponent } from './interval-operator/interval-operator.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservableComponent,
    FromEventComponent,
    IntervalOperatorComponent,
    OfOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
