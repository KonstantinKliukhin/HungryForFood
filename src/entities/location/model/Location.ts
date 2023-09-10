import { Coordinates } from './Coordinates';
import { Viewport } from './Viewport';

export class Location {
  constructor(
    public coordinates: Coordinates,
    public viewport: Viewport,
  ) {}
}
