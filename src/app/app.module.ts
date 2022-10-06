import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import {PopulationService} from "./population.service";

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    UsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [PopulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
