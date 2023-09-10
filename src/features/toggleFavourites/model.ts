import { Restaurant } from "../../entities/restaurant";
import { useFavourites } from "../../entities/favourites";
import { useCallback, useMemo } from "react";

export function useRemoveFavourites() {
  const {setFavourites} = useFavourites();

  return useCallback((restaurant: Restaurant) => {
    setFavourites(prevState => prevState.filter(fv => fv.id !== restaurant.id));
  }, []);
}


export function useAddFavourites() {
  const { setFavourites, favourites} = useFavourites();

  return useCallback((restaurant: Restaurant) => {
    if (favourites.some(fv => fv.id === restaurant.id)) return;
    setFavourites(prevState => [...prevState, restaurant])
  }, [favourites]);
}


export function useToggleFavourites(restaurant: Restaurant) {
  const { favourites} = useFavourites();
  const addFavourites = useAddFavourites();
  const removeFavourites = useRemoveFavourites();

  const isFavourite = useMemo(() =>
      favourites.some(fv => fv.id === restaurant.id),
    [restaurant, favourites]
  )

  const toggleFavourite = isFavourite ? removeFavourites : addFavourites;

  return {isFavourite, toggleFavourite}

}
