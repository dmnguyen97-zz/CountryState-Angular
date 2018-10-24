import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AddcountrystateComponent } from './addcountrystate/addcountrystate.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    AddcountrystateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
