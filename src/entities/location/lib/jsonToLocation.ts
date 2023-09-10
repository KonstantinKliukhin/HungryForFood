import { ApiLocationType } from '../api';
import { Location } from '../model/Location';
import { jsonToCoordinates } from './jsonToCoordinates';
import { jsonToViewport } from './jsonToViewport';

export function jsonToLocation(json: ApiLocationType): Location {
  return new Location(
    jsonToCoordinates(json.location),
    jsonToViewport(json.viewport),
  );
}
