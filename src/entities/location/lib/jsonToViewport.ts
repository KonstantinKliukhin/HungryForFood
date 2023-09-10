import { ApiViewportType } from '../api';
import { Viewport } from '../model/Viewport';
import { jsonToCoordinates } from './jsonToCoordinates';

export function jsonToViewport(json: ApiViewportType): Viewport {
  return new Viewport(
    jsonToCoordinates(json.northeast),
    jsonToCoordinates(json.southwest),
  );
}
