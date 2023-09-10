import { RestaurantApiType } from '../api/types';
import { Restaurant } from '../model/Restaurant';
import { mockImages } from '../../../shared/api';
import { jsonToCoordinates } from "../@x/location";

export function jsonToRestaurant(json: RestaurantApiType) {
  return new Restaurant(
    json.place_id,
    json.name,
    json.icon,
    [mockImages[Math.round(Math.random() * 6)], ...mockImages] ||
      json.photos
        .map((photo) => photo.photo_reference)
        .filter((url) => Boolean(url.trim())),
    json.vicinity,
    Boolean(json.opening_hours?.open_now),
    json.business_status === 'CLOSED_TEMPORARILY',
    jsonToCoordinates(json.geometry.location),
    json.rating,
  );
}
