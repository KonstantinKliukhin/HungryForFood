import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../entities/location";
import { Region } from "react-native-maps";
import { getLatDeltaByViewport } from "../lib";

export function useMapRegion(): Region | undefined {
  const locationContext = useContext(LocationContext);
  const [latDelta, setLatDelta] = useState<number | undefined>(0);
  const location = locationContext.locations[0];
  const viewport = location?.viewport;

  useEffect(() => {
    setLatDelta(getLatDeltaByViewport(viewport));
  }, [viewport]);

  if (!location?.coordinates || !location?.coordinates?.lat || !location?.coordinates?.lng || !latDelta) return;

  return {
    latitude: location?.coordinates?.lat,
    longitude: location?.coordinates?.lng,
    latitudeDelta: latDelta,
    longitudeDelta: 0.02
  };
}
