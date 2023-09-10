import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState
} from "react";
import { Restaurant } from "../@x/restaurant";
import { favouritesMock } from "../../../shared/api";
import { useStoreFavourites } from "./storeFavourites";

type PropsType = PropsWithChildren;

type FavouritesContextType = {
  favourites: Restaurant[];
  setFavourites: Dispatch<SetStateAction<Restaurant[]>>
}

const initialContextState: FavouritesContextType =  {
  favourites: favouritesMock,
  setFavourites: () => undefined,
}

export const FavouritesContext  = createContext<FavouritesContextType>(initialContextState);


export const FavouritesProvider: FC<PropsType> = props => {
  const [favourites, setFavourites] = useState<Restaurant[]>(favouritesMock);

  const value: FavouritesContextType = useMemo(() =>
      ({ favourites, setFavourites }),
    [favourites]);

  useStoreFavourites(favourites, setFavourites);

  return (
    <FavouritesContext.Provider value={value}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
