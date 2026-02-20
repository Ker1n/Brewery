import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ButtonComponent, InputComponent} from '@brewery/ui';
import {BreweriesService} from '@pages/breweries/breweries.service';
import {ReactiveFormsModule} from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-breweries-search',
  imports: [
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './breweries-search.html',
  styleUrl: './breweries-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreweriesSearch {
  public readonly breweriesService = inject(BreweriesService);

  public readonly citySuggestions = toSignal(this.breweriesService.citySuggestions$)


  public onSearch(): void {
    this.breweriesService.searchAction$.next(this.breweriesService.searchControl.value);
  }

  public onSelectCity(city: string): void {
    this.breweriesService.searchControl.setValue(city, {emitEvent: false});
    this.breweriesService.searchAction$.next(city);
  }
}
