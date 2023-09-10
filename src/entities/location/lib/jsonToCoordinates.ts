import { ApiCoordinatesType } from '../api';
import { Coordinates } from '../model/Coordinates';

export function jsonToCoordinates(json: ApiCoordinatesType): Coordinates {
  return new Coordinates(json.lat, json.lng);
}
