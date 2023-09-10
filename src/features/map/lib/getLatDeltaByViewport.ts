import { Viewport } from "../../../entities/location";

export function getLatDeltaByViewport(viewport?: Viewport) {
  if (!viewport) return;
  const northeastLat = viewport.northeast.lat;
  const southwestLat = viewport.southwest.lat;

  return northeastLat - southwestLat;
}
