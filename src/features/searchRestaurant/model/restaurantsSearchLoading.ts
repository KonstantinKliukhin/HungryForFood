import { useContext, useMemo } from "react";
import { RestaurantsContext } from "../../../entities/restaurant";
import { LocationContext } from "../../../entities/location";

export const useRestaurantsSearchLoading = (): boolean => {
  const restaurantsContext = useContext(RestaurantsContext);
  const locationContext = useContext(LocationContext);

  return useMemo(() => restaurantsContext.loading || locationContext.loading,
    [restaurantsContext.loading, locationContext.loading]);
};
