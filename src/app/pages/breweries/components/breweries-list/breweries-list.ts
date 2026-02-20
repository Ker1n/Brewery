import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BreweriesService} from '@pages/breweries/breweries.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {Brewery} from '@core/interfaces';
import {BreweryDetailsComponent} from '@shared/brewery-details';
import {ButtonComponent, CardComponent, LoaderComponent, ModalService} from '@brewery/ui';

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

  openBreweryDetails(brewery: Brewery) {
    const ref = this.dialogService.open(BreweryDetailsComponent, { brewery });

    ref.afterClosed().subscribe(result => {
      console.log('closed with', result);
    });
  }
}
