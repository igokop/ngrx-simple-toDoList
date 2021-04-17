import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './store/list-reducer'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({list: listReducer})
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
