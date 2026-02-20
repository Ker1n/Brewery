import { Nullable } from '@core/types';

export interface Brewery {
  id: string;
  name: string;
  brewery_type: 'micro' | 'nano' | 'regional' | 'brewpub' | 'large' | 'planning' | 'bar' | 'contract' | 'proprietor' | 'closed';
  address_1: Nullable<string>;
  address_2: Nullable<string>;
  address_3: Nullable<string>;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: Nullable<string>;
  latitude: Nullable<string>;
  phone: Nullable<string>;
  website_url: Nullable<string>;
  state: string;
  street: Nullable<string>;
}
