import { Coordinates } from "../../location";

export class Restaurant {
  constructor(
    public id: ID,
    public name: string,
    public icon: Url,
    public photos: Url[],
    public address: string,
    public isOpenNow: boolean,
    public isClosedTemporarily: boolean,
    public coordinates: Coordinates,
    public rating?: number,
  ) {}
}
