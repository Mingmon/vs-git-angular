import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { firstComponent } from './first/first.component';
import { secondComponent } from './second/second.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { WinComponent } from './win/win.component';
import { AppRouteModule } from './app.routing';
//import { secondComponent } from './second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    firstComponent,
    secondComponent,
    ConfirmComponent,
    WinComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
