export class Coordinates {
  constructor(
    public lat: number,
    public lng: number,
  ) {}

  compare(coordinates: Coordinates): boolean {
    return coordinates.lat === this.lat && coordinates.lng === this.lng;
  }
}
