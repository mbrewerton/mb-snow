import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MbSnowModule} from '../../../mb-snow/src/lib/mb-snow.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MbSnowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
