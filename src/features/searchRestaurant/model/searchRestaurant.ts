import { useCallback, useContext } from "react";
import { RestaurantsContext } from "../../../entities/restaurant";
import { LocationContext } from "../../../entities/location";
import { useRestaurantsSearchLoading } from "./restaurantsSearchLoading";

export function useSearchRestaurant() {
  const restaurantsContext = useContext(RestaurantsContext);
  const locationContext = useContext(LocationContext);
  const loading = useRestaurantsSearchLoading();

  return useCallback((search: string) => {
    if (loading) return;
    if (!search.trim().length) {
      locationContext.setSearch("");
      restaurantsContext.searchRestaurants();
    }

    locationContext.searchLocations(search).then(locations => {
      if (!locations) return;
      restaurantsContext.searchRestaurants(locations[0].coordinates);
    });
  }, [locationContext.searchLocations, restaurantsContext.searchRestaurants, loading]);
}
