import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';
import { State } from './states';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // countryURL = 'https://xc-ajax-demo.herokuapp.com/api/countries/';
  countryURL = 'http://localhost:8000/backend/';

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

  addState (state: State, countryCodeForState): Observable<State> {
    const stateURL = this.countryURL + countryCodeForState + '/' + 'states/';
    return this.http.post<State>(stateURL, state);
  }

}

