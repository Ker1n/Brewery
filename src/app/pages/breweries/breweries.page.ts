import {Component} from '@angular/core';
import {DividerComponent} from '@brewery/ui';
import {ReactiveFormsModule} from '@angular/forms';
import {BreweriesService} from '@pages/breweries/breweries.service';
import {BreweriesSearch} from '@pages/breweries/components/breweries-search/breweries-search';
import {BreweriesList} from '@pages/breweries/components/breweries-list/breweries-list';

@Component({
  selector: 'app-breweries-page',
  templateUrl: './breweries.page.html',
  styleUrls: ['./breweries.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BreweriesSearch,
    DividerComponent,
    BreweriesList,
  ],
  providers: [BreweriesService]
})
export class BreweriesPage {
}


