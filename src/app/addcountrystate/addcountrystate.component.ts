import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { State } from '../states';

@Component({
  selector: 'app-addcountrystate',
  templateUrl: './addcountrystate.component.html',
  styleUrls: ['./addcountrystate.component.css']
})
export class AddcountrystateComponent implements OnInit {
  countries: Country[];
  states: State[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  addCountry (name: string, code: string): void {
    if (!name && !code ) { return; }
    this.countryService.addCountry({ name, code } as Country)
      .subscribe(country => {this.countries.push(country)});
  }

  addState (name: string, code: string, countryCode: string): void {
    this.countryService.addState({name, code } as State, countryCode)
       .subscribe(state => {this.states.push(state)});
    console.log(name, code, countryCode);
  }

}
