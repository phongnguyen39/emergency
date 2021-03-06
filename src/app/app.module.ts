import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ApikeyComponent } from './apikey/apikey.component';
import { StatusPaneComponent } from './status-pane/status-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionButtonComponent,
    ApikeyComponent,
    StatusPaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
