import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {MODAL_DATA} from '../../../../../../libs/ui/src/modal/modal.token';
import {Brewery} from '@core/interfaces';

@Component({
  selector: 'ui-brewery-details',
  templateUrl: 'brewery-details.html',
  styleUrls: ['brewery-details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreweryDetailsComponent {
  public data: { brewery: Brewery } = inject(MODAL_DATA);
  constructor() {
    console.log(`babah - [this.data]`, this.data);
  }
}


