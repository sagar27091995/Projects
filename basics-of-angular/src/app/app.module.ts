import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './firstcomponent/first.component';
import { SecondComponent } from './secondcomponent/second.component';
import { ThridComponent } from './thirdcomponent/third.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
