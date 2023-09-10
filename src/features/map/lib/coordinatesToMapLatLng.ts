import { Coordinates } from "../../../entities/location";
import { LatLng } from "react-native-maps";

export function coordinatesToMapLatLng(coordinates: Coordinates): LatLng {
  return {latitude: coordinates.lat, longitude: coordinates.lng};
}
