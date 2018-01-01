import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { firstComponent } from './first/first.component';
import { secondComponent } from './second/second.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { WinComponent } from './win/win.component';
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
