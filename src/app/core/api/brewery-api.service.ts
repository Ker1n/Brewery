import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Brewery } from '@core/interfaces/btewery.interface';

@Injectable({providedIn: 'root'})
export class BreweryApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.openbrewerydb.org/v1';

  public getBreweriesByCity(city: string): Observable<Brewery[]> {
    const encodedCity = encodeURIComponent(city);
    const url = `${this.baseUrl}/breweries?by_city=${encodedCity}`;

    return this.http.get<Brewery[]>(url).pipe(
      catchError(() => of([]))
    );
  }
}
