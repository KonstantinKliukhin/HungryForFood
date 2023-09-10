import React, {
  createContext,
  FC,
  PropsWithChildren, useCallback,
  useEffect,
  useState
} from "react";
import { Restaurant } from './Restaurant';
import { getRestaurants } from '../api';
import { Coordinates } from "../../location";

type RestaurantsContextType = {
  loading: boolean;
  restaurants: Restaurant[];
  error: null | Error;
  searchRestaurants: (coordinates?: Coordinates | string) => void;
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  error: null,
  loading: false,
  searchRestaurants: () => null,
});

export const RestaurantProvider: FC<PropsWithChildren> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const searchRestaurants = useCallback(
    (coordinates?: Coordinates | string) => {
      setError(null);
      setLoading(true);
      getRestaurants(coordinates)
        .then(setRestaurants)
        .catch((e) => {
          if (e instanceof Error) {
            setError(e);
            setRestaurants([]);
          }
        })
        .finally(() => setLoading(false));
    },
    []
  );

  useEffect(function getInitialRestaurants() {
    searchRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, loading, error, searchRestaurants }}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
