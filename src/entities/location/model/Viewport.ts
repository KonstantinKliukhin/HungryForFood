import { Coordinates } from './Coordinates';

export class Viewport {
  constructor(
    public northeast: Coordinates,
    public southwest: Coordinates,
  ) {}
}
