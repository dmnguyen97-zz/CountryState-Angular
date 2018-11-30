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
    if (!name && !code) { return; }
    this.countryService.addCountry({ name, code } as Country)
      .subscribe(country => {this.countries.push(country); });
  }

  addState (statename: string, statecode: string, countryCodeForState: string): void {
    this.countryService.addState({ name: statename, code: statecode, country_code: countryCodeForState } as State, countryCodeForState)
       .subscribe(state => {this.states.push(state); });
  }

}
