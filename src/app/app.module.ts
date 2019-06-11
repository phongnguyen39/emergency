import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ApikeyComponent } from './apikey/apikey.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionButtonComponent,
    ApikeyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
