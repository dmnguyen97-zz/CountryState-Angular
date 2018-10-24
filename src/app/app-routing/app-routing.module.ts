import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from '../countries/countries.component';
import { AddcountrystateComponent } from '../addcountrystate/addcountrystate.component';


const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'addcountry', component: AddcountrystateComponent },
  { path: '', redirectTo: '/countries', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
