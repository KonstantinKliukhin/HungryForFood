import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../entities/location";

export function useRestaurantsSearchState() {
  const locationContext = useContext(LocationContext);
  const [search, setSearch] = useState<string>(locationContext.search);

  useEffect(() => {
    setSearch(locationContext.search)
  }, [locationContext.search]);

  return [search, setSearch] as const;
}
