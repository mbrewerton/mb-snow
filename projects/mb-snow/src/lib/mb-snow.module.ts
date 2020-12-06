import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SnowComponent} from './snow/snow.component';

@NgModule({
  declarations: [SnowComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SnowComponent
  ]
})
export class MbSnowModule {
}
