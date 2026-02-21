import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BreweriesService} from '@pages/breweries/breweries.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {Brewery} from '@core/interfaces';
import {ButtonComponent, CardComponent, LoaderComponent, ModalService} from '@brewery/ui';
import {BreweryDetailsComponent} from '@pages/breweries/components/brewery-detail/brewery-details';

@Component({
  selector: 'app-breweries-list',
  imports: [
    CardComponent,
    ButtonComponent,
    LoaderComponent
  ],
  templateUrl: './breweries-list.html',
  styleUrl: './breweries-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreweriesList {
  private readonly dialogService = inject(ModalService);
  public readonly breweriesService = inject(BreweriesService);

  public breweries = toSignal(this.breweriesService.breweries$, {initialValue: []});

  public openBreweryDetails(brewery: Brewery): void {
    this.dialogService.open(BreweryDetailsComponent, { brewery });
  }
}
