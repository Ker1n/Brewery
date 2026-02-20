import { Routes } from '@angular/router';
import { BreweriesPage } from '@pages/breweries';
import { RouterLink } from '@core/enums';

export const routes: Routes = [
  {
    path: RouterLink.BREWERIES,
    component: BreweriesPage,
  },
  {
    path: RouterLink.ROOT,
    redirectTo: RouterLink.BREWERIES,
    pathMatch: 'full',
  },
];
