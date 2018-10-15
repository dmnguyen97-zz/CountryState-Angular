import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryURL = 'https://xc-ajax-demo.herokuapp.com/api/countries/';

  constructor(
    private http: HttpClient
  ) { }

  getCountry (): Observable<Country[]> {
    console.log("URL="+this.countryURL);
    return this.http.get<Country[]>(this.countryURL);
  }
}

