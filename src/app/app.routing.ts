import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { firstComponent } from './first/first.component';
import { secondComponent } from './second/second.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { WinComponent } from './win/win.component';
//import { secondComponent } from './second/second.component';

const route : Routes = [
    {path : '',redirectTo : '/first',pathMatch:'full'},
    {path : 'first',component : firstComponent},
    {path : 'second',component : secondComponent},
    {path : 'confirm',component : ConfirmComponent},
    {path : 'win',component : WinComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports : [RouterModule]
})
export class AppRouteModule { }
