import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { State } from '../states';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[];
  states: State[];


  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.getCountry();
  }

  getCountry() {

    this.countryService.getCountry().subscribe(countries => {this.countries = countries; });
  }

  getStates(code) {

    this.countryService.getState(code).subscribe(states => {this.states = states; });
  }
}
