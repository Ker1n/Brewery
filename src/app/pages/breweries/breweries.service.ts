import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {Brewery} from '@core/interfaces';
import {Nullable} from '@core/types';
import {
  debounceTime,
  distinctUntilChanged,
  finalize, iif, map, merge,
  Observable, of,
  shareReplay,
  startWith,
  Subject,
  switchMap, tap
} from 'rxjs';
import {BreweryApiService} from '@core/api';
import {FormControl} from '@angular/forms';

@Injectable()
export class BreweriesService {
  private readonly breweryApiService = inject(BreweryApiService);

  private readonly MIN_SEARCH_CHARACTERS_LENGTH =  3;
  private readonly CITY_SUGGESTIONS_LIST_LENGTH =  5;

  public readonly searchControl: FormControl<string> = new FormControl('', { nonNullable: true });

  public searchAction$: Subject<string> = new Subject<string>();

  readonly isLoading: WritableSignal<boolean> = signal(false);
  readonly isCitySuggestionsLoading: WritableSignal<boolean>  = signal(false);

  public breweries$: Observable<Brewery[]> = this.searchAction$.asObservable().pipe(
    tap(() => this.isLoading.set(true)),
    switchMap(city => this.breweryApiService.getBreweriesByCity(city).pipe(finalize(() => this.isLoading.set(false)))),
    startWith([]),
    shareReplay({bufferSize: 1, refCount: true}),
  );

  public citySuggestions$: Observable<Nullable<string[]>> = this.searchControl.valueChanges.pipe(
    tap(() => this.isCitySuggestionsLoading.set(true)),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((value: string) => this.getCitySuggestions(value)),
    shareReplay({bufferSize: 1, refCount: true}),
  );


  private getCitySuggestions(value: string): Observable<Nullable<string[]>> {
    const citySuggestions$ =  iif(
      () => value.length >= this.MIN_SEARCH_CHARACTERS_LENGTH,
      this.breweryApiService.getBreweriesByCity(value).pipe(
        map((breweries: Brewery[]) => [...new Set(breweries.map(b => b.city))].slice(0, this.CITY_SUGGESTIONS_LIST_LENGTH)
        )),
      of(null)
    ).pipe(finalize(() => this.isCitySuggestionsLoading.set(false)))

    return merge(
      citySuggestions$,
      this.searchAction$.asObservable().pipe(map(() => []))
    );
  }
}

