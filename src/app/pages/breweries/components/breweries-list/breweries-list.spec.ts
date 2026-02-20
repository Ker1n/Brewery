import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesList } from './breweries-list';

describe('BreweriesList', () => {
  let component: BreweriesList;
  let fixture: ComponentFixture<BreweriesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweriesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweriesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
