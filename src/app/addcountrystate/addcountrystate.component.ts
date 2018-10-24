import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-addcountrystate',
  templateUrl: './addcountrystate.component.html',
  styleUrls: ['./addcountrystate.component.css']
})
export class AddcountrystateComponent implements OnInit {
  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  addCountry (name: string, code: string): void {
    if (!name && !code ) { return; }
    this.countryService.addCountry({ name, code } as Country)
      .subscribe(country => {this.countries.push(country)});
  }

}
