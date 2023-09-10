import { ApiLocationType } from '../../location';

export type GetRestaurantsApiResponseType = {
  html_attributions: any[];
  next_page_token: string;
  results: RestaurantApiType[];
  status: string;
};

export type RestaurantApiType = {
  business_status?: string;
  geometry: ApiLocationType;
  icon: string;
  name: string;
  opening_hours?: OpeningHoursType;
  photos: PhotoType[];
  place_id: string;
  rating?: number;
  reference: string;
  user_ratings_total?: number;
  vicinity: string;
  plus_code?: PlusCodeType;
  scope?: string;
  types?: string[];
  price_level?: number;
};

type OpeningHoursType = {
  open_now: boolean;
};

type PhotoType = {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
};

type PlusCodeType = {
  compound_code: string;
  global_code: string;
};
