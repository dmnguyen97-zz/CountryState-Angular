import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';
import { State } from './states';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryURL = 'https://xc-ajax-demo.herokuapp.com/api/countries/';

  constructor(
    private http: HttpClient
  ) { }

  getCountry (): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryURL);
  }

  getState (code): Observable<State[]> {
    const stateURL = this.countryURL + code + '/' + 'states/';
    return this.http.get<State[]>(stateURL);
  }

  addCountry (country: Country): Observable<Country> {
    return this.http.post<Country>(this.countryURL, country);
  }

  addState (state: State, code): Observable<State> {
    const stateURL = this.countryURL + code + '/' + 'states/';
    console.log(stateURL);
    return this.http.post<State>(stateURL, state);
  }

}

