import {Component, computed, DestroyRef, inject, signal} from '@angular/core';
import {ButtonComponent} from '@brewery/ui';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Brewery} from '@core/interfaces';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {BreweriesService} from '@pages/breweries/breweries.service';

export interface BreweryListItemModel {
  id: string;
  name: string;
  type?: string;
  location?: string;
}


@Component({
  selector: 'app-breweries-page',
  templateUrl: './breweries.page.html',
  styleUrls: ['./breweries.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    JsonPipe
  ],
  providers: [BreweriesService]
})
export class BreweriesPage {
  private readonly destroyRef = inject(DestroyRef);
  public readonly breweriesService = inject(BreweriesService);

  //
  // readonly listItems = computed<BreweryListItemModel[]>(() =>
  //   this.breweriesService.results().map((brewery) => ({
  //     id: brewery.id,
  //     name: brewery.name,
  //     type: brewery.brewery_type ?? undefined,
  //     location: [brewery.city, brewery.state].filter(Boolean).join(', '),
  //   }))
  // );
  //
  // private readonly breweryById = computed(() =>
  //   new Map(this.breweriesService.results().map((brewery) => [brewery.id, brewery]))
  // );
  //
  // onCityInput(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   this.breweriesService.updateQuery(target.value);
  // }
  //
  onSearch() {
    // this.breweriesService.search();
    this.breweriesService.searchAction$.next(this.breweriesService.searchControl.value);
  }

  // openDetails(id: string) {
  //   const brewery = this.breweryById().get(id);
  //   // if (brewery) {
  //   //   this.overlayService.open(brewery);
  //   // }
  // }
}

