import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesSearch } from './breweries-search';

describe('BreweriesSearch', () => {
  let component: BreweriesSearch;
  let fixture: ComponentFixture<BreweriesSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweriesSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweriesSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
