import React, { createContext, FC, PropsWithChildren, useCallback, useMemo, useState } from "react";
import { getLocationsBySearch } from "../api";
import { Location } from "./Location";

type LocationContextType = {
  loading: boolean;
  error: null | Error;
  locations: Location[];
  search: string;
  searchLocations: (search: string) => Promise<Location[] | void>;
  setSearch: (search: string) => void;
};

export const LocationContext = createContext<LocationContextType>({
  loading: false,
  error: null,
  locations: [],
  searchLocations: async () => undefined,
  search: "",
  setSearch: () => undefined,
});

export const LocationProvider: FC<PropsWithChildren> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [search, setSearch] = useState<string>("");
  const [locations, setLocations] = useState<Location[]>([]);

  const searchLocations = useCallback(async (searchString: string): Promise<Location[] | void> => {
    setSearch(searchString);
    if (!searchString.length) return;
    setError(null);
    setLoading(true);
    return getLocationsBySearch(searchString.toLowerCase().trim())
      .then((locations) => {
        setLocations(locations);
        return locations;
      })
      .catch((e) => {
        if (e instanceof Error)  setError(e);
      })
      .finally(() => setLoading(false));
  }, []);

  const value: LocationContextType = useMemo(
    () => ({
      loading,
      error,
      locations,
      searchLocations,
      search,
      setSearch,
    }),
    [loading, error, locations, searchLocations, search]
  );

  return (
    <LocationContext.Provider value={value}>
      {props.children}
    </LocationContext.Provider>
  );
};
